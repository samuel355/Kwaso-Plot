import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { getPlot } from '../redux/features/PlotSlice'

const Edit = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const {plot, loading, error} = useSelector((state) => ({...state.plot}))

    const [plotStatus, setPlotStatus] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [agent, setAgent] = useState('')
    const [totalAmount, setTotalAmount] = useState(plot.client.totalAmount || 0)
    const [paidAmount, setPaidAmount] = useState(plot.client.paidAmount || 0)
    const [remainingAmount, setRemainingAmount] = useState(plot.client.remainingAmount || 0)

    const handleUpdate = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getPlot(id))
    }, [dispatch, id])
    
    useEffect(() =>{
        if(error){
            toast.error(error);
        }
    }, [error])

    return (
        <div className="row md:mx-28">
            <div className="col-12">
                <div className="contact-form-area">
                    <div className="section-heading">
                        <h2 className='text-center mt-7 font-weight-medium'>UPDATE PLOT</h2>
                    </div>
                    {loading && (
                        <>
                            <div className='flex justify-center align-items-center my-3'>
                                <i className="fa fa-spinner mx-auto mb-4 text-3xl spinner"></i>
                            </div>
                        </>
                    )}
                    <div className="contact-form mx-5 md:mx-[5rem] -mt-5">
                        <form onSubmit={handleUpdate} id="message-form">
                            <div className="contact_input_area">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="form-group">
                                            <label className='text-lg' htmlFor="plot_number">Plot Number</label>
                                            <input disabled value={` Plot Number: ${ plot.properties?.Plot_No}`} type="text" className="form-control pl-2 text-gray-700" name="name" id="name"
                                                placeholder="Plot Number" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className='text-xl' htmlFor="street_name"> Street Name</label>
                                        <div className="form-group">
                                            <input disabled value={ plot.properties?.Street_Nam} type="text" className="form-control pl-2 text-dark mt-3" name="name" id="name"
                                                placeholder="Street Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className='text-lg' htmlFor="plot_status">Plot Status</label>
                                            <select value={plotStatus} onChange={(e) => setPlotStatus(e.target.value)} className="form-control text-dark my-4 pl-2 py-2" name="countryCode" id="countryCode">
                                                <option value="green">Available</option>
                                                <option value="red">Sold</option>
                                                <option value="black">Reserve</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr className='w-full h-1 bg-slate-600 mt-5 mb-7' />
                                    <>
                                        <div className="col-12 my-4">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Full Name</label>
                                                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control pl-2 text-dark mt-2" name="email" id="email"
                                                    placeholder="Client Full Name" />
                                            </div>
                                        </div>

                                        <div className="col-12 my-4">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Email</label>
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control pl-2 text-dark mt-2" name="email" id="email"
                                                    placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Address</label>
                                                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control pl-2 text-dark" name="address" id="email"
                                                    placeholder="Residential Address" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 mt-5">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Phone</label>
                                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control pl-2 text-dark" name="phone" id="email"
                                                    placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Agent Name</label>
                                                <input value={agent} onChange={(e) => setAgent(e.target.value)} type="text" className="form-control text-dark pl-2" name="phone" id="email"
                                                    placeholder="Agent Name" />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5 gap-6 lg:flex items-center justify-between">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Total Amount</label>
                                                <input value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} type="text" className="form-control text-dark pl-2 mt-2" name="phone" id="email"
                                                    placeholder="Total Amount" />
                                            </div>
                                            <div className="form-group my-5">
                                                <label className='text-lg' htmlFor="plot_status">Amount Paid</label>
                                                <input value={paidAmount} onChange={(e) => setPaidAmount(e.target.value)} type="text" className="form-control text-dark pl-2 mt-2" name="phone" id="email"
                                                    placeholder="Amount Paid" />
                                            </div>
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Amount Remaining</label>
                                                <input value={remainingAmount} onChange={(e) => setRemainingAmount(e.target.value)} type="text" className="form-control text-dark pl-2 mt-2" name="phone" id="email"
                                                    placeholder="Amount Remaining" />
                                            </div>
                                        </div>
                                    </>
                                   
                                    <div className="col-12 text-center mt-5">
                                        <button type="submit" id="submit" className="btn fancy-btn fancy-dark bg-transparent mt-5">Update</button>
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