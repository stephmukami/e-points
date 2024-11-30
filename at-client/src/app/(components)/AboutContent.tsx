import React from 'react'

type Props = object

function AboutContent({}: Props) {
  return (
    <>
    <div className="top-row bg-black text-center p-8 mb-4  ">
        <h3 className='text-white text-2xl mb-4'>What is iPrevent ?</h3>
        <p className='text-white mb-10 '>iPrevent leverages cutting-edge machine learning to evaluate your likelihood of developing diabetes based on personalized health data. By inputting key factors such as
           lifestyle habits, medical history, and more, you will receive a tailored risk assessment to help you better understand your health.

           Our goal is to empower you with insights that enable proactive management of your well-being.
           

           
           
            
            </p>
        <div className="home-btns flex  space-x-6 font-bold  justify-center items-center">
          <button className='  w-[140px] h-[36px] bg-brand-green rounded-md'>Register</button>
          <button className='w-[140px] h-[36px] rounded-md bg-brand-grey'>Log In</button>
        </div>
    </div>

    <div className="second-row p-6">
    <h3 className='text-black text-2xl mb-4 text-center'>How it Works</h3>
        <div className="flex-container flex flex-col items-center md:justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-[120px] py-4">

        <div className='bg-brand-green w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>Sign Up </h4>
          <p>Go ahead create an account using details such as your name and password.Proceed to log in to iPrevent. </p>

        </div>

        <div className='bg-brand-peach w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>Input your attributes</h4>
          <p>Follow the instructions provided to input your details that will feed our  machine learning model. </p>
        </div>

        <div className='bg-brand-blue w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>Obtain results</h4>
          <p> You will then receive a prediction of your risk level of obtaining Type 2 Diabetes and examples of actions to take.</p>
        </div>

    </div>


    </div>
    </>
  )
}

export default AboutContent