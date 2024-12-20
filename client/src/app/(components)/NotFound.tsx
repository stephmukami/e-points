import React from 'react'
import Link from 'next/link'

type Props = object

function NotFound({}: Props) {
  return (
    <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] lg:space-x-[110px] min-h-screen min-w-screen">
      <div className="text-container p-[40px]">
        <h2 className='text-3xl mb-3'>Oops! No Page Here 😅 !</h2>
        <div className='md:w-[400px] md:p-[20px] text-justify'>
          
          <p className='mb-4 text-l'>
            Navigate Back to the Home Page.
          </p>
          
          <Link href= '/'>
          <button  className='bg-black text-white w-[140px] h-[36px] rounded-md hover:bg-brand-green'>
             Home Page
          </button>
          </Link>
       
        </div>
      </div>
      <div className="image-container">
        <img className='md:w-[600px] md:h-[600px] w-screen h-[300px]' src="./Broken Heart.png" alt="image of broken heart" />
      </div>
    </div>
  )
}

export default NotFound