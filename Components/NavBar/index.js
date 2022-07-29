import React from 'react'
import Link from 'next/link'

import style from './NavBar.module.css'

const Navbar = () => {
  console.log('Navbar renderizado')
  return (
    <nav>
      <menu className={style.container}>
        <Link href="/">
          <a className={style.brand}>Soy un NavBar</a>
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar
