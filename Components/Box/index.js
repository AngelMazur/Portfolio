import React from 'react'
import { ButtonBox, BoxContainer } from './box.style'
import Link from 'next/link'

const Box = ({ geometry, name, province, url, onClick }) => {
  return (
    <>
      <BoxContainer>
        <h2>{name}</h2>
        <Link href={url}>
          <a target="_blank" rel="noopener noreferrer">
            <p>Pincha aqui para reservar tu cita</p>
          </a>
        </Link>
        <ButtonBox onClick={onClick}>
          <h3>{province}</h3>
          <p>{geometry}</p>
        </ButtonBox>
      </BoxContainer>
    </>
  )
}

export default Box
