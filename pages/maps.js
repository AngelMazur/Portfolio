import React, { useRef, useState, useCallback, useEffect } from 'react'
import useGeocode from '../hooks/useGeocode'
//UI
import { Flex, Input } from '@chakra-ui/react'
// import { formatRelative } from "date-fns"
//GOOGLE API
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  InfoWindow,
} from '@react-google-maps/api'

import gafas from '../assets/gafas.png'

import Markers from '@Components/Markers'
//STYLE
import style from '../Components/Search/Search.module.css'

//DATA
import venues from '../data/venues.json'
import locations from '../data/locations.json'

//CONST
const MAP_KEY = process.env.NEXT_PUBLIC_MAPS_KEY

const Maps = () => {
  console.log('Maps renderizado')
  //LOAD MAP
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
  console.log(markers)

  // useEffect(() => {
  //   setMarker(venues)
  // }, [markers])
  // const [selected, setSelected] = useState(null)
  // const { selected } = Markers()
  // console.log(onSelected)
  // const onClick = () => {
  //   setSelected({
  //     lat: markers[0].geometry[0],
  //     lng: markers[0].geometry[1],
  //   })
  //   console.log('prueba de botón')
  // }

  /** @type React.MutableRefObject<HTMLInputElement> */
  const mapRef = useRef()
  const onMapLoad = useCallback(() => mapRef.current, [])

  // if (loadError) return 'Error loading Maps'
  // if (!isLoaded) return 'Loading Maps'
  if (!isLoaded) {
    return 'LOADING MAPS'
  } else {
    return (
      <>
        <Flex
          position="relative"
          flexDirection="column"
          alignItems="center"
          h="90vh"
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
              {/* {markers.map((place, i) => (
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
              ))} */}
              <Markers
                position={markers}
              />
              {/* {markers ? (
                <InfoWindow
                  position={markers}
                  onLoad={onMapLoad}
                  onCloseClick={() => {
                    setSelected(null)
                  }}
                >
                  <p>Prueba de marcador</p>
                </InfoWindow>
              ) : null} */}
            </GoogleMap>
          </div>
        </Flex>
      </>
    )
  }
}

export default Maps
