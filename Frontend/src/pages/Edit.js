import React, {useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { getPlot, updatePlot } from '../redux/features/PlotSlice'

const Edit = () => {

    const initialState = {
        plotNumber: null,
        plotStatus: '',
        StreetName: '',
        fullName: '',
        email: '',
        address: '',
        phone: '',
        agent: '',
        totalAmount: 0,
        paidAmount: 0,
        remainingAmount: 0,
    }
    const { id } = useParams()

    const dispatch = useDispatch()
    const [plotInfo, setPlotInfo] = useState(initialState)
    const {plot, loading, error} = useSelector((state) => ({...state.plot}))
    let {plotNumber, plotStatus, streetName, fullName, email, phone, address, agent, totalAmount, paidAmount, remainingAmount} = plotInfo;

    plotNumber = plot.properties?.Plot_No
    streetName = plot.properties?.Street_Nam
    plotStatus = plot.properties?.Status
    fullName = plot.client?.fullName
    email = plot.client?.email
    phone = plot.client?.phone
    address = plot.client?.address
    agent = plot.client?.agent
    totalAmount = plot.client?.totalAmount
    paidAmount = plot.client?.paidAmount
    remainingAmount = plot.client?.remainingAmount

    useEffect(() => {
        dispatch(getPlot(id))
    }, [dispatch, id])
    
    useEffect(() =>{
        if(error){
            toast.error(error);
        }
    }, [error])

    const handleUpdate = (e) => {
        e.preventDefault();
        if(plotInfo.plotStatus === ''){
            return toast.error('Please select plot Status');
        }
        if(plotInfo.totalAmount === 0 && plotInfo.paidAmount === 0 && plotInfo.totalAmount === 0){
           return toast.error('Check the total amount and the paid amount well');
        }
        console.log(plotInfo)

        // if(plotStatus !== '' && phone !== '' && fullName !== ''){
        //     const status = plotStatus;
        //     const clientDetails = {
        //         fullName, 
        //         email, 
        //         address, 
        //         phone, 
        //         agent, 
        //         totalAmount,
        //         paidAmount,
        //         remainingAmount
        //     }
        //     if(id){
        //         dispatch(updatePlot(id, status, clientDetails, toast))
        //     }else{
        //         toast.error('Something went wrong updating the plot. Try again later')
        //     }
            

        // }else{
        //     toast.error('Select plot Status and Add Client Name and phone Number')
        // }
    }

    const handleChange = (e) => {
        // create the new state and set it
        setPlotInfo((prev )=> ({ ...prev, [e.target.name]: e.target.value }))

        e.preventDefault()
    }

    return (
        <div className="row md:mx-28">
            <div className="col-12">
                <div className="contact-form-area">
                    <div className="section-heading text-lg py-5">
                        <h2 className='text-center mt-5 font-weight-medium md:mb-0'>UPDATE PLOT</h2>
                    </div>
                    {loading && (
                        <>
                            <div className='flex justify-center align-items-center my-3'>
                                <i className="fa fa-spinner mx-auto mb-4 text-3xl spinner"></i>
                            </div>
                        </>
                    )}
                    {
                        plot && (
                            <div className="contact-form mx-5 md:mx-[5rem] -mt-5">
                                <form onSubmit={handleUpdate} id="message-form">
                                    <div className="contact_input_area">
                                        <div className="row">

                                            <div className="col-12 mb-3">
                                                <div className="form-group">
                                                    <label className='text-lg' htmlFor="plot_number">Plot Number</label>
                                                    <input disabled value={` Plot Number: ${ plotNumber}`} type="text" className="form-control pl-2 text-gray-700"
                                                        placeholder="Plot Number" />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className='text-xl' htmlFor="street_name"> Street Name</label>
                                                <div className="form-group">
                                                    <input disabled value={ streetName} type="text" className="form-control pl-2 text-dark mt-3"
                                                        placeholder="Street Name" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className='text-lg' htmlFor="plot_status">Plot Status</label>
                                                    <select name='plotStatus' onChange={handleChange} className="form-control text-dark my-4 px-2 py-2">
                                                        <option defaultChecked value=''>Select Plot Status</option>
                                                        <option value="Sold">Sold</option>
                                                        <option value="Reserved">Reserve</option>
                                                        <option value="Available">Available</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <hr className='w-full h-1 bg-slate-600 mt-5 mb-7' />
                                            
                                            <>
                                                <div className="col-12 my-4">
                                                    <div className="form-group">
                                                        <label className='text-lg' htmlFor="plot_status">Full Name</label>
                                                        <input type="text" name='fullName' value={fullName} onChange={handleChange} className="form-control pl-2 text-dark mt-2"
                                                            placeholder="Client Full Name" />
                                                    </div>
                                                </div>

                                                <div className="col-12 my-4">
                                                    <div className="form-group">
                                                        <label className='text-lg' htmlFor="plot_status">Email</label>
                                                        <input name='email' type="email" value={email} onChange={handleChange} className="form-control pl-2 text-dark mt-2"
                                                            placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-5">
                                                    <div className="form-group">
                                                        <label className='text-lg' htmlFor="plot_status">Address</label>
                                                        <input value={address} onChange={handleChange} type="text" className="form-control pl-2 text-dark" name="address"
                                                            placeholder="Residential Address" />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12 mt-5">
                                                    <div className="form-group">
                                                        <label className='text-lg' htmlFor="plot_status">Phone</label>
                                                        <input value={phone} name="phone" onChange={handleChange} type="number" className="form-control pl-2 text-dark"
                                                            placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-5">
                                                    <div className="form-group">
                                                        <label className='text-lg' htmlFor="plot_status">Agent Name</label>
                                                        <input name="agent" value={agent} onChange={handleChange} type="text" className="form-control text-dark pl-2"
                                                            placeholder="Agent Name" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-5 gap-2 lg:flex items-center justify-between">
                                                    <div className="form-group">
                                                        <label className='text-lg' htmlFor="plot_status">Total Amount</label>
                                                        <input name="totalAmount" value={totalAmount} placeholder='Total Amount' onChange={handleChange} type="number" className="form-control text-dark pl-2 mt-2"
                                                            />
                                                    </div>
                                                    <div className="form-group my-5">
                                                        <label className='text-lg' htmlFor="plot_status">Amount Paid</label>
                                                        <input name="paidAmount" value={paidAmount} onChange={handleChange} placeholder='Paid Amount' type="number" className="form-control text-dark pl-2 mt-2"
                                                             />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className='text-lg' htmlFor="plot_status">Amount Remaining</label>
                                                        <input name='remainingAmount' value={remainingAmount} onChange={handleChange} placeholder='Remaining Amount' type="number" className="form-control text-dark pl-2 mt-2 mb-4"
                                                            />
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
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Edit