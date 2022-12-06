import React, {useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { updatePlot } from '../redux/features/PlotSlice'

const plotInfo= {
    status: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    agent: '',
    totalAmount: '',
    paidAmount:  '',
    remainingAmount: '',
}
const Edit = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [plotData, setPlotData] = useState(plotInfo)
    const [allDetails, setAllDetails] = useState({})
    const {plots, loading, error} = useSelector((state) => (state.plot))
    const {status, fullName, email, phone, address, agent, totalAmount, paidAmount, remainingAmount} = plotData

    useEffect(() => {
        if(plots.length === 0) {
            navigate('/')
        }
    }, [plots, navigate])

    useEffect(() => {
        if(id){
            const singlePlot = plots?.find((plot) => plot._id === id)
            setAllDetails({...singlePlot})
            setPlotData({...singlePlot?.client, status: singlePlot?.properties?.Status})
        }
    }, [id, plots])

    useEffect(() =>{
        if(error){
            toast.error(error);
        }
    }, [error])

    const handleUpdate = (e) => {
        e.preventDefault();

        if(status === ''){
            return toast.error('Please select plot Status');
        }

        if(totalAmount === undefined && paidAmount === undefined && remainingAmount === undefined){
            toast.error('Check the total amount, amount paying and the remaining amount')

        }else if (fullName === undefined && phone === undefined){
            toast.error('Add client Name and Phone number at least')
        }else if(totalAmount === '' && paidAmount === '' && remainingAmount === ''){
            toast.error('Check the total amount, amount paying and the remaining amount')
        }else{
            if(id){
                //console.log({id, toast, status, fullName, phone, email, address, totalAmount, paidAmount, remainingAmount})
                dispatch(updatePlot({id, toast, navigate, status, fullName, phone, email, address, agent, totalAmount, paidAmount, remainingAmount}))
            }else{
                toast.error('Something went wrong updating the plot. Try again later')
            }
        }
    }

    const onInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setPlotData({...plotData, [name]: value});
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
                    <div className="contact-form mx-5 md:mx-[5rem] -mt-5">
                        <form onSubmit={handleUpdate} id="message-form">
                            <div className="contact_input_area">
                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="form-group">
                                            <label className='text-lg' htmlFor="plot_number">Plot Number</label>
                                            <input disabled type="text" value={`Plot Number: ${allDetails.properties?.Plot_No}`} className="form-control pl-2 text-gray-700"
                                                placeholder="Plot Number" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className='text-xl' htmlFor="street_name"> Street Name</label>
                                        <div className="form-group">
                                            <input value={allDetails.properties?.Street_Nam} disabled type="text" className="form-control pl-2 text-dark mt-3"
                                                placeholder="Street Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className='text-lg' htmlFor="plot_status">Plot Status</label>
                                            <select name='status' value={status} onChange={onInputChange} className="form-control text-dark my-4 px-2 py-2">
                                                <option value={status}>{status}</option>
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
                                                <input value={fullName} type="text" name='fullName' onChange={onInputChange} className="form-control pl-2 text-dark mt-2"
                                                    placeholder="Client Full Name" />
                                            </div>
                                        </div>

                                        <div className="col-12 my-4">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Email</label>
                                                <input name='email' value={email} onChange={onInputChange} type="email" className="form-control pl-2 text-dark mt-2"
                                                    placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Address</label>
                                                <input type="text" value={address} onChange={onInputChange} className="form-control pl-2 text-dark" name="address"
                                                    placeholder="Residential Address" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 mt-5">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Phone</label>
                                                <input  name="phone" value={phone} onChange={onInputChange} type="number" className="form-control pl-2 text-dark"
                                                    placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Agent Name</label>
                                                <input name="agent" value={agent} onChange={onInputChange} type="text" className="form-control text-dark pl-2"
                                                    placeholder="Agent Name" />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5 gap-2 lg:flex items-center justify-between">
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Total Amount</label>
                                                <input name="totalAmount" value={totalAmount} onChange={onInputChange} placeholder='Total Amount'  type="number" className="form-control text-dark pl-2 mt-2"
                                                    />
                                            </div>
                                            <div className="form-group my-5">
                                                <label className='text-lg' htmlFor="plot_status">Amount Paid</label>
                                                <input name="paidAmount" value={paidAmount} onChange={onInputChange} placeholder='Paid Amount' type="number" className="form-control text-dark pl-2 mt-2"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className='text-lg' htmlFor="plot_status">Amount Remaining</label>
                                                <input name='remainingAmount' value={remainingAmount} onChange={onInputChange} placeholder='Remaining Amount' type="number" className="form-control text-dark pl-2 mt-2 mb-4"
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
                </div>
            </div>
        </div>
    )
}

export default Edit