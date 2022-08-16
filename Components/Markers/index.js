import React, { useState } from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'

const Markers = ({ position, onLoad }) => {
  console.log('Markers renderizado')
  const [selected, setSelected] = useState(null)
  const stateMarker = position.map((place, i) => (
    <>
      <Marker
        key={i}
        position={{ lat: place.geometry[0], lng: place.geometry[1] }}
        onClick={() => {
          setSelected({ lat: place.geometry[0], lng: place.geometry[1] })
        }}
      />
      {selected ? (
        <InfoWindow
        position={{ lat: place.geometry[0], lng: place.geometry[1] }}
        onLoad={onLoad}
        onCloseClick={() => {
          setSelected(null)
        }}
      >
        <p>Prueba de mierda</p>
      </InfoWindow>
      ) : null}
    </>
  ))
  return <>{stateMarker}</>
}

export default Markers
