import React from 'react'
import Navbar from '@Components/NavBar'
import Footer from '@Components/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default Layout