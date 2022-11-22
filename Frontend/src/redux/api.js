import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:6060/api"
})

//Get all Plots
export const getAllPlots = () => API.get('/plots')