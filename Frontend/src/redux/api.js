import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:6060/api"
})

//Get all Plots
export const getAllPlots = () => API.get('/plots')

//Visitor send interests 
export const sendInterest = (formValue) => API.post('/interests', formValue)

//User login 
export const login = (formValue) => API.post('/login', formValue)
