import React, { useState } from 'react'
import { Marker } from '@react-google-maps/api'
// import useGeocode from '../../hooks/useGeocode'

const Markers = (props) => {
  const { places } = props
  console.log({ places })
  const markers = places.map((place, i) => (
    <Marker key={i} position={place} />
  ))
  return {markers}
}

export default Markers
