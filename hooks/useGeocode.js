import { useEffect, useState } from 'react'
import Geocode from 'react-geocode'

const MAP_KEY = process.env.NEXT_PUBLIC_MAPS_KEY
Geocode.setApiKey(MAP_KEY)
Geocode.setLanguage('es')
Geocode.setRegion('es')

export default function useGeocode ({ address, zip, defaultLocation = { lat: 0, lng: 0 } }) {

  const [centerMap, setCenterMap] = useState(defaultLocation)

  useEffect(() => {
    Geocode.fromAddress(`${address}, ${zip}`).then(
      (response) => {
        const result = response.results[0]
        const { location } = result.geometry
        setCenterMap(location)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  return {
    centerMap
  }

}