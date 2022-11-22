import React, { useEffect} from 'react'
import { MapContainer, TileLayer, Popup, Polygon, Polyline, } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import {useDispatch, useSelector} from 'react-redux'
import { getPlots, getPlotName} from '../redux/features/PlotSlice';
import PlotInner from './PlotInner';

const Leaflet = () => {

    const dispatch = useDispatch()
    const {plots, plotName} = useSelector((state) => ({...state.plot}))

    console.log(plotName)
    const center = [6.7588644098723805, -1.4987540245056152]
    const zoom = 17

    useEffect(() => {
        dispatch(getPlots())
    }, [dispatch])

    const handleGetPlotName = (name) => {
        dispatch(getPlotName(name))

        const position = document.getElementById('message-form')
        position.scrollIntoView({ behavior: 'smooth' });
    }
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
                        <Popup style={{width: '100%'}}>
                            <p>{`Plot Number: ${plot.properties?.Plot_No} ${plot.properties?.Street_Nam}`}</p>
                            <div style={{padding: '15px'}}>
                                <button onClick={() => handleGetPlotName(plot._id)} className='btn btn-primary shadow-sm' style={{alignSelf: 'center',  marginLeft: '10px', paddingTop: '6px', paddingBottom: '6px', paddingRight: '10px', paddingLeft: '10px', fontSize: '16px', borderRadius: '10px', border: 'none',}}>
                                    Buy or Reserve
                                </button>
                            </div>
                        </Popup>
                    </Polygon>
                ))
            }

            {
                plots?.length > 0  && (
                    <Polyline weight={5} color='white' positions={plots[0]?.geometry?.coordinates} />
                )
            }
        </MapContainer>
    )
}

export default Leaflet