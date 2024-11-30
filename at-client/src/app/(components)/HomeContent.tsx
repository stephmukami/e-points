import React from 'react'
import Link from 'next/link'

type Props = object

function HomeContent({}: Props) {
  return (
    <>
    <main className='md:p-8 p-2'>
      <div className="flex-container flex flex-col md:flex-row  space-x-[80px] ">

      <div className="flex-col-one  md:w-[450px] mb-4 md:mb-0 md:p-0 p-2">
        <h1 className='font-bold text-3xl mb-[50px]'>
          Championing effecient transport sustainably.
        </h1>

        <h3 className='font-light mb-6'>
          Get rewarded to enjoy affordable lower carbon transport.
          <br></br>
          Use an e-motorcycle and add your E-Points today!
        </h3>

            <div className="home-btns flex  space-x-6 font-bold mb-10">
              <Link href = "#how-it-works">
              <button className='  w-[140px] h-[36px] bg-brand-green rounded-md hover:bg-brand-orange'>How it Works</button>

              </Link>


              <Link href = "/register">
              <button className='w-[140px] h-[36px] rounded-md bg-brand-green hover:bg-brand-orange'>Register</button>

              </Link>
            </div>

            <div className="extra-intro-links ">
                <strong>
                    <div className='flex items-center space-x-2'>
                    <h3 className="">Turn your daily commute into profits</h3>
                    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right"/>
                    </div>


                    <div className='flex items-center space-x-2 '>
                    <h3 className="">Be a part of a greener future</h3>
                    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right"/>
                    </div> 
                </strong>

            </div>

      </div>
      
     <div className="flex-col-2">

     </div>
     <img className='md:w-full md:h-full w-screen h-[300px]' src="./at-boda-pic.PNG" alt="image of electric ebike" />
    
      </div>

      <div className="extra-intro">
        
      </div>

      <div className="second-row p-6">
    <h3 className='text-black text-2xl mb-4 text-center' id="how-it-works" >How it Works</h3>
        <div className="flex-container flex flex-col items-center md:justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-[120px] py-4">

        <div className='bg-brand-green w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>Sign Up </h4>
          <p>As a rider/ passenger create an account using details such as your name and password.Proceed to log in. </p>

        </div>

        <div className='bg-brand-green w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>List your trip</h4>
          <p>As a driver follow the instructions provided to generate a unique code for your customer </p>
        </div>

        <div className='bg-brand-green w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>Obtain rewards for your points</h4>
          <p> As a customer top up your points and then redeem them for airtime.</p>
        </div>

    </div>


    </div>
    </main>
    </>
  )
}

export default HomeContent