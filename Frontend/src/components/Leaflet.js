import React from 'react'
import { MapContainer, TileLayer, Popup, Polygon, } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const Leaflet = () => {

    const center = [6.7588644098723805, -1.4987540245056152]
    const zoom = 17

    return (
        <MapContainer center={center} zoom={zoom} style={{height: '100%', width: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Leaflet