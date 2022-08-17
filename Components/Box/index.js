import React from 'react'
import style from './Box.module.css'
import Link from 'next/link'

const Box = ({ geometry, name, province, url }) => {
  return (
    <>
      <ul className={style.container}>
        <li className={style.box}>
          <Link href={url}>
            <a
              target="_blank"
              rel="noopener noreferrer">
              <h2>{name}</h2>
            </a>
          </Link>
          <h3>{province}</h3>
          <p>{geometry}</p>
        </li>
      </ul>
    </>
  )
}

export default Box
