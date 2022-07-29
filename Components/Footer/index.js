import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  console.log('Footer renderizado')
  return (
    <section className={style.container}>
      <div className={style.brand}>Soy un Footer</div>
    </section>
  )
}

export default Footer
