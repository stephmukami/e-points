import React from 'react'
import Navbar from '../(components)/Navbar'
import Footer from '../(components)/Footer'
import Deactivate from '../(components)/Deactivate'

type Props = object

function page({}: Props) {
  return (
    <>
    <Navbar/>
    <Deactivate/>
    <Footer/>
    </>
  )
}

export default page