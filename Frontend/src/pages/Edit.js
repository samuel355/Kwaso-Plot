import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getPlot } from '../redux/features/PlotSlice'

const Edit = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const {plot, loading, error} = useSelector((state) => ({...state.plot}))
    console.log(plot)

    const handleUpdate = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getPlot(id))
    }, [dispatch, id])
    
    return (
        <div className="row md:mx-28">
            <div className="col-12">
                <div className="contact-form-area">
                    <div className="section-heading">
                        <h2 className='text-center mt-3'>Edit Plot</h2>
                    </div>
                    <div className="contact-form mx-5 md:mx-[5rem]">
                        <form onSubmit={handleUpdate} id="message-form">
                            <div className="contact_input_area">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="form-group">
                                            <label className='text-lg' htmlFor="plot_number">Plot Number</label>
                                            <input disabled value={` Plot Number: ${ plot.properties?.Plot_No}`} onChange={'(e) => setFullname(e.target.value)'} type="text" className="form-control text-gray-700 mt-3" name="name" id="name"
                                                placeholder="Plot Number" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className='text-xl' htmlFor="street_name"> Street Name</label>
                                        <div className="form-group">
                                            <input disabled value={ plot.properties?.Street_Nam} onChange={'(e) => setFullname(e.target.value)'} type="text" className="form-control text-dark mt-3" name="name" id="name"
                                                placeholder="Street Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className='text-lg' htmlFor="plot_status">Plot Status</label>
                                            <select value='' onChange={'(e) => setCountry(e.target.value)'} className="form-control text-dark my-4" name="countryCode" id="countryCode">
                                                <option value="Select Status"> Plot Status</option>
                                                <option value="green">Available</option>
                                                <option value="red">Sold</option>
                                                <option value="black">Reserve</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="form-group">
                                            <input type="email" value={'email'} onChange={'(e) => setEmail(e.target.value)'} className="form-control text-dark" name="email" id="email"
                                                placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="form-group">
                                            <input value={'address'} onChange={'(e) => setAddress(e.target.value)'} type="text" className="form-control text-dark" name="address" id="email"
                                                placeholder="Residential Address" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input value='' onChange={'(e) => setPhone(e.target.value)'} type="number" className="form-control text-dark" name="phone" id="email"
                                                placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <select value='' onChange={'(e) => setOption(e.target.value)'}  className="form-control text-dark" name="status" id="status">
                                                <option value="Choose Option"> Choose Option</option>
                                                <option value="Ready To Buy">Ready To Buy</option>
                                                <option value="Reserve For Me"> Reserve For Me</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea readOnly name="message" className="form-control text-dark" id="message"
                                                cols="35" rows="15" value={'plotDetails'}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" id="submit"
                                            className="btn fancy-btn fancy-dark bg-transparent mt-5">Update</button>
                                    </div> <br />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit