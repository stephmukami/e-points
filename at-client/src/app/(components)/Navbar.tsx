'use client'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
type Props = object

function Navbar({}: Props) {
    const session = useSession()
    //session tracking
   const [logged, setLogged] = useState(false)

   useEffect(() => {
    if (session?.status === 'authenticated') { //can also check for user.session under auth() on server side
      setLogged(true)
    }
  })

  return (
    <div>
        <nav className=' bg-navbar-bg  flex flex-col md:flex-row justify-center  items-center md:space-x-[240px] space-x-4 p-2 '>

        <div className='logo-section  relative right-2  m-2 md:m-0'>
            <Link href="/">
            <div className="logo-section  flex justify-center items-center space-x-6 ">
                <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/square-90.png" alt="square-90"/>
                <h2 className='text-2xl'>E-Points</h2>
            
            </div> 
            </Link>
        
        </div>

        <div className=' font-light text-lg text-section flex flex-col md:flex-row justify-center items-center md:space-x-20  space-y-2 md:space-y-0  p-2'>
            <Link href="/">
            <h3 className='border-b-2 border-transparent hover:border-b-2 hover:border-b-black transition ease-in'>Home</h3>
            </Link>

            <Link href="/">
            <h3 className='border-b-2 border-transparent hover:border-b-2 hover:border-b-black transition ease-in'>How To Use E-Points</h3>
            </Link>

            

          
                { logged ? (
                    <div className="auth-btns flex justify-center items-center  bg-secondary-grey rounded-3xl h-[50px] w-[210px]  space-x-4">
                        <Link href="/deactivate">
                            <div>
                            <h3 className=' hover:text-red-900 font-bold'>Deactivate</h3>
                            </div>
                        </Link>
                    
                        <div>
                        <Link href="/login">
                        <div className='flex items-center justify-center bg-white rounded-2xl w-[80px] h-[30px]'>
                            <h3 onClick={() => signOut()} className='hover:font-bold'>Log Out</h3>
                        </div>
                        </Link>


                        </div>

                    </div>
                        ) :  (
                            <div className="auth-btns flex justify-center items-center  bg-secondary-grey rounded-3xl h-[50px] w-[190px]  space-x-4">
                                <Link href="/register">
                                    <div>
                                    <h3 className='font-bold'>Register</h3>
                                    </div>
                                </Link>
                                    
                                    <div>
                                    <Link href="/login">
                                        <div className='flex items-center justify-center bg-white rounded-2xl w-[80px] h-[30px]'>
                                            <h3 className='hover:font-bold' >Log In</h3>
                                        </div>
                                    </Link>
                        
                        
                                    </div>
            
                            </div>
                ) 

                }
    

        </div>

     

   
        </nav>

   


    </div>
  )
}

export default Navbar