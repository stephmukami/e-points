import React from 'react'
import Footer from './(components)/Footer'
import Navbar from './(components)/Navbar'
import NotFound from './(components)/NotFound'

type Props = object

function Missing({}: Props) {
  return (
    <>
       <Navbar/>
       <NotFound/>
       <Footer/>
    </>
 
  )
}

export default Missing
