import React, { useRef, useState, useCallback } from 'react'
import useGeocode from '../hooks/useGeocode'
import Box from '@Components/Box'
import Markers from '@Components/Markers'

//GOOGLE API
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

//STYLE
import { MapsContent, WrapperBox, WrapperMaps } from './style/maps.style'

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

  const [selectedMarker, setSelectedMarker] = useState(false)
  const [selected, setSelected] = useState(null)

  const toggleButtonBox = () =>
    !selectedMarker ? setSelectedMarker(true) : setSelectedMarker(false)
  console.log({ selectedMarker })
  console.log({ selected })

  //RENDERS BOXES
  const renderBoxes = markers.map((item, i) => (
    <Box
      key={i}
      geometry={`lat: ${item.geometry[0]}, lng: ${item.geometry[1]}`}
      name={item.name}
      province={item.province}
      url={item.url}
      onClick={() =>
        setSelected({
          lat: item.geometry[0],
          lng: item.geometry[1],
          name: item.name,
          province: item.province,
          url: item.url,
          toggleButtonBox: toggleButtonBox(),
        })
      }
    />
  ))

  const toggleSelectedBox = () => {
    if (!selectedMarker) {
      return renderBoxes
    } else {
      return (
        <Box
          name={selected.name}
          province={selected.province}
          url={selected.url}
          onClick={() => toggleButtonBox()}
        />
      )
    }
  }

  const toggleSelectedMarker = () => {
    if (!selectedMarker) {
      return (
        <Markers
          position={markers}
          onLoad={onMapLoad}
          selected={selected}
          onCloseClick={setSelected}
          onClick={setSelected}
        />
      )
    } else {
      return <Marker position={{ lat: selected.lat, lng: selected.lng }} />
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
        <MapsContent>
          <WrapperMaps>
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
              {toggleSelectedMarker()}
            </GoogleMap>
          </WrapperMaps>
        </MapsContent>
        <WrapperBox className={!selectedMarker ? '' : 'selectedMarker'}>
          {toggleSelectedBox()}
        </WrapperBox>
      </>
    )
  }
}

export default Maps
