import React from 'react'
import L from 'leaflet'
import { Marker, Polygon } from 'react-leaflet';

const PlotInner = ({plot_number, coord}) => {
    const center = L.polygon(coord).getBounds().getCenter();
    const text = L.divIcon({html: plot_number});

    return (
        <Polygon color="blue" positions={coord}>
            <Marker position={center} icon={text} />
        </Polygon>
    )
}

export default PlotInner