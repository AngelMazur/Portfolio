import React from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
// import useGeocode from '../../hooks/useGeocode'

const Markers = (props) => {
  const { position, onClick } = props
  const markers = position.map((place, i) => (
    <Marker
      key={i}
      position={{ lat: place.geometry[0], lng: place.geometry[1] }}
      onClick={onClick}
    />
  ))
  return <>{markers}</>
}

export default Markers
