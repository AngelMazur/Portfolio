import React from 'react'
import { useRef, useState, useCallback, useEffect } from 'react'
import useGeocode from '../hooks/useGeocode'
//UI
import { Flex, Input } from '@chakra-ui/react'

//GOOGLE API
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from '@react-google-maps/api'

//STYLE
import style from '../Components/Search/Search.module.css'

//DATA
import venues from '../data/venues.json'

//CONST
const MAP_KEY = process.env.NEXT_PUBLIC_MAPS_KEY

//CONFIG
const libraries = ['places']

const Home = () => {
  //LOAD MAP
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY,
    libraries,
  })
  //MARKERS
  const [markers, setMarker] = useState(venues)

  //GEOCODE
  const { centerMap } = useGeocode({
    address: 'Tumirada Laguna',
    zip: '28025',
  })

  /** @type React.MutableRefObject<HTMLInputElement> */
  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
    debugger
  }, [])

  if (loadError) return 'Error loading Maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <>
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        h="90vh"
        w="98vw"
      >
        <Autocomplete>
          <Input
            type="text"
            placeholder="Location"
            ref={mapRef}
            className={style.search}
          />
        </Autocomplete>
        <div className={style.box}>
          <GoogleMap
            id="map"
            center={centerMap}
            zoom={18}
            mapContainerStyle={{ width: '80%', height: '80%' }}
            options={{
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={onMapLoad}
          >
            {markers.map((marker, i) => (
              <Marker
                key={i}
                position={{ lat: marker.geometry[0], lng: marker.geometry[1] }}
              />
            ))}
          </GoogleMap>
        </div>
      </Flex>
    </>
  )
}
export default Home
