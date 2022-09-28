import React, { useState } from 'react'
import Image from 'next/future/image'
import styled from 'styled-components'

//Style
const CarouselImg = {
  maxWidth: '500px',
  width: '100%',
  height: 'auto',
  /* opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  } */
}
const CarouselButton = styled.button`
  color: white;
  background-color: #ebd2d4;
  padding: 8px;
  margin: 0 5px;
  cursor: pointer;
`

const CarouselWrapped = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`

const Carousel = () => {
  const images = [
    'BannerGlasses_0.jpg',
    'BannerGlasses_1.jpg',
    'BannerGlasses_2.jpg',
  ]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])

  const selectNewImage = ({ next = true }) => {
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }
  const previousImage = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const nextImage = () => {
    selectNewImage(selectedIndex, images)
  }

  return (
    <>
      <CarouselWrapped>
        <Image
          src={`/assets/Image/${selectedImage}`}
          alt="BannerGlasses"
          style={CarouselImg}
          sizes="80vw"
          priority={true}
          width={100}
          height={100}
        />

        <CarouselButton onClick={previousImage}>{'<'}</CarouselButton>
        <CarouselButton onClick={nextImage}>{'>'}</CarouselButton>
      </CarouselWrapped>
    </>
  )
}

export default Carousel
