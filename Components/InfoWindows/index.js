import React from 'react'
import { InfoWindow } from '@react-google-maps/api'

const InfoWindows = ({position, onLoad}) => {
const [selected, setSelected] = useState(null)
  return (
    <div>
      <InfoWindow
        position={position}
        onLoad={onLoad}
        onCloseClick={() => {
          setSelected(null)
        }}
        >
          <p>Prueba de marcador</p>
        </InfoWindow>
        
    </div>
  )
}

export default InfoWindows