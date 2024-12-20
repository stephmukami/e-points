import React from 'react'
import Navbar from '../(components)/Navbar'
import Footer from '../(components)/Footer'



type Props = object

function page({}: Props) {
    
  return (
    <div>
        <Navbar/>
        
        <Footer/>
    </div>
  )
}

export default page