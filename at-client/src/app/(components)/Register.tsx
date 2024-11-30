'use client'

import React from 'react'
import Link from 'next/link'

import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
type Props = object

function Register({}: Props) {

    const router = useRouter()

    const [formInput, setFormInput]  = useState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      user_status:""
  
    });

    const registerUser = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        
  

    axios
      .post("/api/register", formInput)
      .then(() =>
        setFormInput({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          user_status:""
        })
      )
      .then(() =>
        toast(" ✅ Successful Registration ! Now log in🎉", {
          duration: 5000,
          // Styling
          style: {},
          className: "",

          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },


        })

      )
      .then(() => {
        router.push('/login');
      })

      .catch(() => toast("Something went wrong😔!", {
        duration: 5000,
        // Styling
        style: {},
        className: "",

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }),

     );
  };

  
  return ( 
    <>
        <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] md:space-x-[110px] md:min-h-screen md:min-w-screen justify-center items-center">
        
            <div className="form-container w-screen md:w-1/3  p-[40px] ">
                <h2 className='text-3xl mb-3'>Sign Up to E-Points</h2>
                <h4>Already have an account? 
                    <Link href="/login">
                        <span className='font-bold'>Log In</span>
                    </Link>
                    </h4>
                <form action="" className='p-[20px] ' onSubmit={registerUser}>
                <div className='mb-4'>
                        <label htmlFor="first-name" >Are you a rider or passenger ?</label>
                    </div>

                    <div className='mb-8 md:w-[370px]  '>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" 
                        type="text" 
                        placeholder="e.g. rider"
                        id="user_status"
                        name="user_status"
                        value={formInput.user_status}
                        onChange={(e) =>
                            setFormInput({
                            ...formInput,
                            user_status: e.target.value,
                          })
                        }
                        required
      
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="first-name" >First Name</label>
                    </div>

                    <div className='mb-8 md:w-[370px]  '>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" 
                        type="text" 
                        placeholder=" e.g. Jane"
                        id="first_name"
                        name="first_name"
                        value={formInput.first_name}
                        onChange={(e) =>
                            setFormInput({
                            ...formInput,
                            first_name: e.target.value,
                          })
                        }
                        required
      
                        />
                    </div>

                    <div className='mb-4' >
                        <label htmlFor="last-name">Last Name</label>
                    </div>

                    <div className='mb-8 md:w-[370px]  '>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" type="text" 
                        required
                        placeholder=" e.g. Smith"
                        id="last_name"
                        name="last_name"
                        value={formInput.last_name}
                        onChange={(e) =>
                            setFormInput({
                            ...formInput,
                            last_name: e.target.value,
                          })
                        }
      
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="last-name">Email Address </label>
                    </div>

                    <div className='mb-8 md:w-[370px] '>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" type="email" 
                        placeholder=" e.g. janesmith@gmail.com"
                        id="email"
                        name="email"
                        value={formInput.email}
                        onChange={(e) =>
                            setFormInput({
                            ...formInput,
                            email: e.target.value,
                          })
                        }
                        required
      
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="last-name">Password</label>
                    </div>

                    <div className='mb-8 md:w-[370px]  '>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" type="password" 
                        id="password"
                        name="password"
                        value={formInput.password}
                        onChange={(e) =>
                            setFormInput({
                            ...formInput,
                            password: e.target.value,
                          })
                        }
                        required
      
                        />
                    </div>
                    <button className='bg-black text-white w-[140px] h-[36px] rounded-md relative left-14'>Sign Up</button>
                </form>
            </div>

        <div className="image-container   md:w-2/3 ">
        <img className='md:w-full md:h-full w-screen h-[300px]' src="./at-boda-pic.PNG" alt="image of electric ebike" />

        </div>
    </div>
    </>
  )
}

export default Register