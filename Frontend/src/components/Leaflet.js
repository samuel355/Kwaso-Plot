import React from 'react'
import { MapContainer, TileLayer, Popup, Polygon, } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const Leaflet = () => {

    const center = [6.7588644098723805, -1.4987540245056152]
    const zoom = 17

    return (
        <MapContainer style={{height: '100%', width: '100%'}}>

        </MapContainer>
    )
}

export default Leaflet