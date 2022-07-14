import React from 'react'
import { useRef, useState, useCallback } from 'react'
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

import Markers from '@Components/Markers'
//STYLE
import style from '../Components/Search/Search.module.css'

//DATA
import locations from '../data/locations.json'

//CONST
const MAP_KEY = process.env.NEXT_PUBLIC_MAPS_KEY

//CONFIG
const libraries = ['places']

const Home = (props) => {
  //LOAD MAP
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY,
    libraries,
  })

  //GEOCODE
  const location = locations.map((item) => {
    return [item.name, item.cp]
  })

  const zip = location.map(item => {
    return item[1]
  })
console.log(zip)

const addres = location.map(item => {
  return item[0]
})
console.log(addres)


const { centerMap } = useGeocode({
  address: addres,
  zip: zip,
})

console.log({centerMap})
  //MARKERS
  const [markers, setMarker] = useState({centerMap})

  console.log({ markers })

  /** @type React.MutableRefObject<HTMLInputElement> */
  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
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
            {/* <Markers places={markers} /> */}
          </GoogleMap>
        </div>
      </Flex>
    </>
  )
}
export default Home
