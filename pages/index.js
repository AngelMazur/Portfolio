import React from 'react'
import Link from 'next/link'

import style from './style/Home.module.css'

//Components
import Carousel from '@Components/Carousel'

const Home = () => {
  return (
   <>
    <menu className={style.container}>
      <h1 className={style.title}>Opticas Mazur</h1>
      <section>
        <Carousel/>
        <ul>
          <li>Foto de GAFA</li>
          <li>Foto de GAFA</li>
          <li>Foto de GAFA</li>
          <li>Foto de GAFA</li>
        </ul>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Link href='/maps'>
          <a className={style.brand}>UBICACIÓN</a>
        </Link>
      </section>
    </menu>
   </>
  )
}

export default Home
