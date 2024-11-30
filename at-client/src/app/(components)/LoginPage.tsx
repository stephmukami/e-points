'use client'
import { useState } from "react";
import { signIn } from 'next-auth/react'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import React from 'react'
import Link from 'next/link'
import axios from "axios";


type Props = object

function LoginPage({}: Props) {

    const router = useRouter()
    const [data, setData] = useState({
      email: "",
      password: ""
    });

    const loginUser = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        
    signIn('credentials', {
        ...data,
        redirect: false
      })
        .then((callback) => {
          if (callback?.error) {
            toast("Wrong credentials, 😞 try again", {
              duration: 5000,
              // Styling
              style: {},
              className: "",
    
              ariaProps: {
                role: "status",
                "aria-live": "polite",
              },
            })
            console.log(callback.error)
          } else if (callback?.ok) {
            toast("Logged in successfully! 🎊", {
              duration: 5000,
              // Styling
              style: {},
              className: "",
    
              ariaProps: {
                role: "status",
                "aria-live": "polite",
              },
            })
            //router.push('/general') 
            axios.post('/api/check-status',data.email);
          }
        })
    }
    
    

  return (
     <>
     <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] lg:space-x-[110px] min-h-screen min-w-screen">
        
        <div className="form-container md:w-1/3  p-[40px]">
            <h2 className='text-3xl mb-3'>Welcome back to E-Points!</h2>
            <h4 className='mb-4 md:mb-0 m-0'>
                Do not have an account? 
                <Link href="/register">
                    <span className='font-bold mr-4'>Sign Up</span>
                </Link>
            </h4>

                <form action="" className='md:p-[20px] ' onSubmit={loginUser}>
              

                    <div className='mb-4'>
                        <label htmlFor="last-name">Email Address </label>
                    </div>

                    <div className='mb-8 md:w-[370px] w-[200px]  '>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]"
                                       placeholder=" e.g. johndoe@gmail.com"
                                       id="email"
                                       name="email"
                                       type="email"
                                       autoComplete="email"
                                       value={data.email}
                                       onChange={(e) =>
                                         setData({ ...data, email: e.target.value })
                                       }
                                       required
                         />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="last-name">Password</label>
                    </div>

                    <div className='mb-8 md:w-[370px] w-[200px] '>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" type="password" 
                                          id="password"
                                          name="password"
                                          autoComplete="current-password"
                                          required
                                          value={data.password}
                                          onChange={(e) =>
                                            setData({ ...data, password: e.target.value })
                                          }
                        />
                    </div>
                    <button className='bg-black text-white w-[140px] h-[36px] rounded-md '>Log In</button>
                </form>
            </div>

        <div className="image-container   md:w-2/3 ">
        <img className='md:w-full md:h-full w-screen h-[300px]' src="./at-boda-pic.PNG" alt="image of electric ebike" />

        </div>
    </div>
    </>
  )
}

export default LoginPage