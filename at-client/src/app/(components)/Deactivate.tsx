'use client';

import axios from 'axios';
import React from 'react';
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react'

type Props = object;

function Deactivate({}: Props) { 
  const session = useSession();
  const router = useRouter(); 

 
const deleteAccount = async () => {
  const userEmail = session?.data?.user?.email;

  if (!userEmail) {
    console.error('No user found in session.');
    return;
  }

  try {
    const response = await axios.delete(`/api/delete`, { data: { user_email: userEmail } });
    
    if (response?.data?.error) {
      toast("Something went wrong, 😞 try again", {
        duration: 5000,
        style: {},
        className: "",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      console.error(response.data.error);
    } else {
      toast("Account deactivated successfully! 🎊", {
        duration: 5000,
        style: {},
        className: "",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      router.push('/'); 

      await signOut(); 
      
    }
  } catch (error) {
    toast("Error occurred while deleting account.", {
      duration: 5000,
      style: {},
      ariaProps: {
        role: "alert",
        "aria-live": "assertive",
      },
    });
    console.error('Error:', error);
  }
};

  return (
    <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] lg:space-x-[110px] min-h-screen min-w-screen">
      <div className="text-container p-[40px]">
        <h2 className='text-3xl mb-3'>Sorry to see you leave 😔 !</h2>
        <div className='md:w-[400px] md:p-[20px] text-justify'>
          <p className='mb-4 text-l'>
            You are on the <strong>account deletion page</strong>, where you can exercise your right to privacy.
          </p>
          <p className='mb-4 text-l'>
            We believe in giving you full control over your data, and deleting your account will remove all associated information from our records.
          </p>
          <p className='mb-6 text-l'>
            If you decide to proceed, please be assured that your privacy is our priority, and we are here to support you every step of the way.
          </p>
          <button onClick={deleteAccount} className='bg-black text-white w-[140px] h-[36px] rounded-md hover:bg-red-700'>
            Delete Account
          </button>
        </div>
      </div>
      <div className="image-container">
        <img className='md:w-[600px] md:h-[600px] w-screen h-[300px]' src="./Broken Heart.png" alt="image of broken heart" />
      </div>
    </div>
  );
}

export default Deactivate;