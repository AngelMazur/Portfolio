import React, { useRef, useState, useCallback, useEffect } from 'react'
import useGeocode from '../hooks/useGeocode'
import Box from '@Components/Box'

//UI
import { Flex, Input } from '@chakra-ui/react'

//GOOGLE API
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  InfoWindow,
} from '@react-google-maps/api'

// import gafas from '../assets/gafas.png'
// import Markers from '@Components/Markers'

//STYLE
import style from '@Components/Search/Search.module.css'

//DATA
import venues from '../data/venues.json'
import locations from '../data/locations.json'

//CONST
const MAP_KEY = process.env.NEXT_PUBLIC_MAPS_KEY

const Maps = () => {
  console.log('Maps renderizado')
  //INIT MAP
  const [libraries] = useState(['places'])
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY,
    libraries,
  })

  console.log({ isLoaded })

  //GEOCODE
  const location = locations.map((item) => {
    return [item.name, item.cp]
  })

  const zip = location.map((item) => {
    return item[0]
  })

  const address = location.map((item) => {
    return item[0]
  })

  const { centerMap } = useGeocode({
    address: address[7],
    zip: zip[7],
  })

  //MARKERS
  const [markers, setMarker] = useState(venues)
  const [selected, setSelected] = useState(null)
  console.log(selected)

  // const { selected } = Markers()
  // const onClick = () => {
  //   setSelected({
  //     lat: markers[0].geometry[0],
  //     lng: markers[0].geometry[1],
  //   })
  //   console.log('prueba de botón')
  // }

  // LOAD MAP
  /** @type React.MutableRefObject<HTMLInputElement> */
  const mapRef = useRef()
  const onMapLoad = useCallback(() => mapRef.current, [])

  if (!isLoaded) {
    return 'LOADING MAPS'
  } else {
    return (
      <>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          position="relative"
          h="50vh"
          w="98vw"
        >
          {/* <Autocomplete>
          <Input
            type="text"
            placeholder="Location"
            ref={mapRef}
            className={style.search}
          />
        </Autocomplete> */}
          <div className={style.box}>
            <GoogleMap
              id="map"
              center={centerMap}
              zoom={10}
              mapContainerStyle={{ width: '80%', height: '80%' }}
              options={{
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={onMapLoad}
            >
              {markers.map((place, i) => (
                <Marker
                  key={i}
                  position={{ lat: place.geometry[0], lng: place.geometry[1] }}
                  onClick={() => {
                    setSelected({
                      lat: place.geometry[0],
                      lng: place.geometry[1],
                    })
                  }}
                />
              ))}
              {/* <Markers
                position={markers}
                onLoad={onMapLoad}
              /> */}
              {selected ? (
                <InfoWindow
                  position={{ lat: selected.lat, lng: selected.lng }}
                  onLoad={onMapLoad}
                  onCloseClick={() => {
                    setSelected(null)
                  }}
                >
                  <p>
                    Estoy en la latitud: {selected.lat} y en la longitud{' '}
                    {selected.lng}
                  </p>
                </InfoWindow>
              ) : null}
            </GoogleMap>
          </div>
        </Flex>
        {markers.map((item, i) => (
          <Box
          key={i}
          render={`lat: ${item.geometry[0]}, lng: ${item.geometry[1]}`} />
        ))}

        {/* PARA SELECCIONAR EL MARCADOR Y QUE TE LO PINTE EL BOX
        {selected ? (
          <Box selected={`lat: ${selected.lat} lng: ${selected.lng}`} />
        ) : null} */}
      </>
    )
  }
}

export default Maps
