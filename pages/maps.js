import React, { useRef, useState, useCallback } from 'react'
import useGeocode from '../hooks/useGeocode'
import Box from '@Components/Box'

//UI
import { Flex } from '@chakra-ui/react'

//GOOGLE API
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

// import gafas from '../assets/gafas.png'
import Markers from '@Components/Markers'

//STYLE
import style from '@Components/Search/Search.module.css'

//DATA
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

  //TODO: Integrar geocode (solo consigo que me de un output)
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
    address: address[3],
    zip: zip[3],
  })
  //MARKERS
  const [markers, setMarker] = useState(locations)
  const [selected, setSelected] = useState(null)

  //
  const renderBoxes = markers.map((item, i) => (
    <Box
      key={i}
      geometry={`lat: ${item.geometry[0]}, lng: ${item.geometry[1]}`}
      name={item.name}
      province={item.province}
      url={item.url}
    />
  ))
  const toggleSelected = () => {
    if (!selected) {
      return renderBoxes
    } else {
      return (
        <Box
          name={selected.name}
          province={selected.province}
          url={selected.url}
        />
      )
    }
  }

  // LOAD MAP
  /** @type React.MutableRefObject<HTMLInputElement> */
  const mapRef = useRef()
  const onMapLoad = useCallback(() => mapRef.current, [])
  //TODO: integrar loadError

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
          <div className={style.box}>
            <GoogleMap
              id="map"
              center={centerMap}
              zoom={11}
              mapContainerStyle={{ width: '80%', height: '80%' }}
              options={{
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={onMapLoad}
            >
              <Markers
                position={markers}
                onLoad={onMapLoad}
                selected={selected}
                onCloseClick={setSelected}
                onClick={setSelected}
              />
            </GoogleMap>
          </div>
        </Flex>
        {toggleSelected()}
      </>
    )
  }
}

export default Maps
