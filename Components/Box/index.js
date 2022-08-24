import React, { useState } from 'react'
import style from './Box.module.css'
import Link from 'next/link'

const Box = ({ geometry, name, province, url, onClick }) => {
  return (
    <>
      <ul className={style.container}>
        <li className={style.box}>
          <button
            onClick={onClick}>
            <Link href={url}>
              <a target="_blank" rel="noopener noreferrer">
                <h2>{name}</h2>
              </a>
            </Link>
            <h3>{province}</h3>
            <p>{geometry}</p>
          </button>
        </li>
      </ul>
    </>
  )
}

export default Box
