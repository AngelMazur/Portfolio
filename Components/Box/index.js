import React from 'react'
import style from './Box.module.css'

const Box = ({ selected, render }) => {
  return (
    <>
      <div>{selected}</div>
      <ul className={style.container}>
        <li className={style.box}>
          <p>{render}</p>
        </li>
      </ul>
    </>
  )
}

export default Box
