import React from 'react'
import Navbar from '@Components/NavBar'
import Footer from '@Components/Footer'
import Maps from '@Components/Maps'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Maps />
      {children}
      <Footer />
    </>
  )
}

export default Layout
