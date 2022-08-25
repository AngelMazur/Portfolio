import React, { useState } from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'

const Markers = ({ position, onLoad, selected, onClick, onCloseClick }) => {
  console.log('Markers renderizado')

  const stateMarker = position.map((item, i) => (
    <React.Fragment key={i}>
      <Marker
        key={i}
        position={{ lat: item.geometry[0], lng: item.geometry[1] }}
        onClick={() =>
          onClick({
            lat: item.geometry[0],
            lng: item.geometry[1],
            name: item.name,
            province: item.province,
            url: item.url,
          })
        }
      />
      { selected  ? (
        <InfoWindow
          key={item.id}
          position={{ lat: selected.lat, lng: selected.lng }}
          onLoad={onLoad}
          onCloseClick={() => {
            onCloseClick(null)
          }}
        >
          <>
            <h3>{selected.name}</h3>
            <p>{selected.province}</p>
          </>
        </InfoWindow>
      ) : null}
    </React.Fragment>
  ))
  return <>{stateMarker}</>
}

export default Markers
