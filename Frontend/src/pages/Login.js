import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/features/UserSlice'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, loading, error} = useSelector((state) => ({...state.user}))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let formValue = {
        email, password
    }
    const loginHandler = (e) => {
        e.preventDefault()
        if(email === ''){
            return toast.error('Please enter your email address')
        }
        if(password === ''){
            return toast.error('Please enter your password')
        }
        dispatch(login({formValue, navigate, toast}))
    }

    useEffect(() =>{
        if(error){
            toast.error(error);
        }
    }, [error])

    return (
        <div className='container'>
            <div className="row p-5">
                <div className="col-6" style={{width: '480px', margin: 'auto'}}>
                    <form className="form" onSubmit={loginHandler}>
                        <div className="form-group">
                            <label htmlFor="email" className="label">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control p-2" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password" className="label">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control p-2" />
                        </div>
                        <div className="form-group text-center">
                            <button type='submit' className="btn btn-primary"> Login </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login