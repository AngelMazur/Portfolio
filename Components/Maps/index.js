import React from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import Geocode from "react-geocode";
import { compose, withProps } from 'recompose'

import credentials from '../../credentials'
Geocode.setApiKey(credentials.mapsKey)

const Maps = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key${credentials.mapsKey}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div className="container-map" style={{ height: `400px` }} />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(() => {
  const place = 'Tumirada Batán'

    // Initialize the location
    Geocode.fromAddress(place).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(`lat: ${lat}, lng: ${lng}`);
        return(lat, lng)
      },
      (error) => {
        console.error(error);
      }
    )

  //   const geocoder = new google.maps.Geocoder()

  //   geocoder.geocode(geocoderRequest).then((geocoderResult) => {
  //     console.log(geocoderResult)

      // const result = geocoderResult.results[0]
      // const { location } = result.geometry

      // const centerMap = {
      //   lat: location.lat(),
      //   lng: location.lng(),
      // }

   

  //     // Initialize the map
  //     const map = new google.maps.Map(document.getElementById('map'), {
  //       center: centerMap,
  //       zoom: 18,
  //     })

  //     const marker = new google.maps.Marker({
  //       position: centerMap,
  //       map,
  //       title: place.name,
  //       label: place.name,
  //     })

  //     marker.setMap(map)
  //   })
  //   return <div className='map'>Maps</div>
  // }
  return (
    <>
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 40.322915, lng: -3.714147 }}
      />
      <Marker position={{ lat: 40.322915, lng: -3.714147 }} />
    </>
  )
})
export default Maps