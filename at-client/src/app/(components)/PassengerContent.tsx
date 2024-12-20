'use client';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';


type Props = object;

function PassengerContent({}: Props) {
  const [data, setData] = useState({
    code: '', 
  });
  const [confirmation, setConfirmation] = useState<string | null>(null);
  // const [current_user_email, setCurrentUserEmail] = useState<string | null>(null);

  const [points,setPoints] = useState<number | null >(null); // or useState<number>(0)

  const {data:session} = useSession();
  const current_user_email = session?.user?.email;


  //->use effect for fetching airtime and points from the backend

  // useEffect(()=>{
  //   if (!session) return;
  //   const email = session?.user?.email;
  //   setCurrentUserEmail(email)
  // },[session])

  // Function to send the code to the API route
  async function readandSendCode(e: React.FormEvent) {
    e.preventDefault(); 

    try {
      const response = await axios.post('/api/user-read', { code: data.code });

      if (response.status === 200) {
        console.log('Code successfully read:', response.data);
        if(current_user_email){
          updatePoints(current_user_email);
        }
        setConfirmation(
          response.data.exists
            ? 'Code Validated 🤩.'
            : 'Code not valid 😥'
        );
      }
    } catch (error) {
      console.error('Error sending the code:', error);
      setConfirmation('An error occurred while checking the code. Please try again.');
    }
  }

  async function updatePoints(current_user_email:string){
    try {
      const response = await axios.post('/api/points-addition', {email: current_user_email});
  
      if (response.status === 200) {
        console.log(response.data.message);
        setPoints((prev) => (prev || 0) + 10);  //should be from db, use state shd fetch points balance,and airtime redeemed then update state so it always reads updated info from db
      }
    } catch (error) {
      console.error('Error updating points:', error);
    }
  }

  async function redeemPoints(current_user_email:string |undefined|null){
    if (current_user_email){
      try{
        console.log("making api request with the email:", current_user_email);
        const response = axios.post('/api/pts-to-airtime',{email:current_user_email});
        console.log(response);

      }catch(error){
        console.error('Error in redeeming points',error);
      }

    }
  }

  return (
    <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] lg:space-x-[110px] min-h-screen min-w-screen">
      {
        session ?(
          <div className="form-container md:w-1/3 p-[40px]">
          <h2 className="text-2xl mb-3">Enter your unique customer code!</h2>
          <form action="" className="md:p-[20px]" onSubmit={readandSendCode}>
            <div className="mb-4">
              <label htmlFor="code">Customer Code</label>
            </div>
  
            <div className="mb-8 md:w-[370px] w-[200px]">
              <input
                className="bg-input-grey md:w-[370px] w-full rounded-sm h-[32px]"
                placeholder="e.g. 12334"
                id="code"
                name="code"
                type="text"
                value={data.code}
                onChange={(e) =>
                  setData({ ...data, code: e.target.value }) // Update code in state
                }
                required
              />
            </div>
  
            <button className="bg-black text-white w-[140px] h-[36px] rounded-md">Enter Code</button>
          </form>
  
          {/* Display the confirmation message */}
          {confirmation && (
            <div className="mt-4 text-purple-600">
              <p>{confirmation}</p>
            </div>
          )}
          <p>
          Your current Points Balance is: {points}
          </p>
          <p> You can redeem your points for airtime, 5 points can send 5 Ksh of airtime </p> {/*change to 10 pts for airtime */}
          {/*can add a type assertion but it is not safe ie <button onClick={()=> redeemPoints(current_user_email!)} className="bg-black text-white w-[140px] h-[36px] rounded-md">Redeem Airtime</button>
   */}
          <button onClick={()=> redeemPoints(current_user_email)} className="bg-black text-white w-[140px] h-[36px] rounded-md">Redeem Airtime</button>
  
          <p>The amount of airtime you have redeemed </p>
  
        </div>
        ) :(
          <div className=' p-10 w-[600px] text-2xl font-semibold text-center'> Please Login </div>
        )
      }

      <div className="image-container md:w-2/3">
        <img
          className="md:w-full md:h-full w-screen h-[300px]"
          src="./at-boda-pic.PNG"
          alt="electric ebike"
        />
      </div>
    </div>
  );
}

export default PassengerContent;
