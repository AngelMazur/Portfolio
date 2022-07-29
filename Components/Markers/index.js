import React, { useState } from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
// import useGeocode from '../../hooks/useGeocode'

const Markers = ({ position }) => {
  console.log('Markers renderizado')
  const [selected, setSelected] = useState(null)
  const markers = position.map((place, i) => (
    <Marker
      key={i}
      position={{ lat: place.geometry[0], lng: place.geometry[1] }}
      onClick={() => {
        setSelected({ lat: place.geometry[0], lng: place.geometry[1] })
      }}
    />
  ))
  return <>{markers}</>
}

export default Markers
