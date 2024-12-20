import React from 'react'
import Navbar from '../(components)/Navbar'
import Footer from '../(components)/Footer'
import RiderContent from '../(components)/RiderContent'

type Props = object

function page({}: Props) {
  return (
    <>
        <Navbar/>
        <RiderContent/>
        <Footer/>
    </>
   
  )
}

export default page