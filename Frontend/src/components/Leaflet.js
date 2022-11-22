import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Popup, Polygon, } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import {useDispatch, useSelector} from 'react-redux'
import { getPlots } from '../redux/features/PlotSlice';
import PlotInner from './PlotInner';

const Leaflet = () => {

    const dispatch = useDispatch()
    const {plots} = useSelector((state) => ({...state.plot}))

    const center = [6.7588644098723805, -1.4987540245056152]
    const zoom = 17

    useEffect(() => {
        dispatch(getPlots())
    }, [dispatch])

    return (
        <MapContainer center={center} zoom={zoom} style={{height: '100%', width: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                plots && plots.map((plot) => (
                    <Polygon key={plot._id} positions={plot.geometry.coordinates} fillOpacity={0.8} fillColor="red" pathOptions={{color:'blue'}}>
                        <PlotInner coord={plot.geometry.coordinates} plot_number={plot.properties.Plot_No} />   
                        <Popup>
                            {`Plot Number: ${plot.properties?.Plot_No} ${plot.properties?.Street_Nam}`}
                            <button></button>
                        </Popup>
                    </Polygon>
                ))
            }
        </MapContainer>
    )
}

export default Leaflet