import React from 'react'
import { useRef, useState, useCallback, useEffect } from 'react'

//UI
import { Flex, Input } from '@chakra-ui/react'

//GOOGLE API
import Geocode from 'react-geocode'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from '@react-google-maps/api'

//STYLE
import style from '../Components/Search/Search.module.css'

//DATA
import data from '../assets/data.json'

//CONST
const MAP_KEY = process.env.NEXT_PUBLIC_MAPS_KEY

//CONFIG
const libraries = ['places']
Geocode.setApiKey(MAP_KEY)
Geocode.setLanguage('es')
Geocode.setRegion('es')

const Home = () => {
  //LOAD MAP
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY,
    libraries,
  })
  //MARKERS
  const [markers, setMarker] = useState(data)
  const centerMap = { lat: 40.4049821, lng: -3.7464155 }

  //GEOCODE
  useEffect(() => {
    Geocode.fromAddress('Zamora Castellana').then(
      (response) => {
        const result = response.results[0]
        const { location } = result.geometry

        const centerMap = {
          lat: location.lat,
          lng: location.lng,
        }
        console.log(centerMap)
        return centerMap
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

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
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={onMapLoad}
          >
            {markers.venues.map((marker, i) => (
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
