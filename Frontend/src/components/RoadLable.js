import React from 'react'
import L from 'leaflet'

const RoadLable = (center) => {
    L.multiPolygon([
        [[-37.7599, 175.2515], [-37.7599, 175.2595], [-37.7653, 175.2595], [-37.7653, 175.2515], [-37.7599, 175.2515]],
        [[-37.7672, 175.2560], [-37.7672, 175.2601], [-37.7706, 175.2601], [-37.7706, 175.2560], [-37.7672, 175.2560]]
    ])
    .bindLabel('MultiPolygon\'s have labels as well :)')
    .addTo(center);
    
  return (
    <div>RoadLable</div>
  )
}

export default RoadLable