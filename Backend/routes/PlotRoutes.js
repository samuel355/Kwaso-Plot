const mongoose = require('mongoose')
const express = require('express')
const PlotDetails = require('../Models/PlotDetails.js')
const asyncHandler = require('express-async-handler')
const protect = require('../Middleware/AuthMiddleware.js')


const plotRouter = express.Router()

//ADD PLOT
plotRouter.post('/addPlot', protect, asyncHandler(async(req, res) => {

    const {geometry, coordinates, properties, client} = req.body
    const plotDetails = await PlotDetails.create({
        geometry, coordinates, properties, client
    })

    try{
        const savePlotDetail  =  await plotDetails.save()
        res.status(200).json(savePlotDetail)
        
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
}))

//FETCH ALL PLOTS
plotRouter.get('/plots', asyncHandler(async(req, res) => {
    try{
        const plots = await PlotDetails.find()
        
        if(plots.length === 0){
            res.json({message: 'Not Plots available'})
        }else{
            res.status(200).json(plots)
        }
        
    }catch(err){
        res.status(500).json({message: err})
    }
}))


//GET SINGLE PLOT WITH ID
plotRouter.get('/plots/:id', protect, asyncHandler(async(req, res) => {

    const plot = await PlotDetails.findById(req.params.id)

    try {
        if (plot) {
            res.status(200).json(plot)

        } else {
            res.status(404).json({message: 'Plot not found'})
        }

    } catch (error) {
        res.status(401).json({message: 'Sorry Something went wrong, try again'})
        console.log(error)
    }
}))

//UPDATE PLOT
plotRouter.put('/plot/update/:id', protect, asyncHandler(async(req, res) => {
    
    const plot = await PlotDetails.findById(req.params.id)

    try {
        if (plot) {
            plot.properties.Status = req.body.status || plot.properties.Status
            plot.client = req.body.clientDetails || plot.client
            
            const updatedPlot = await plot.save()
            res.json(updatedPlot)

        } else {
            res.status(404).json({message: 'Plot not found'})
        }

    } catch (error) {
        res.status(401).json({message: 'Sorry Something went wrong, try again'})
        console.log(error)
    }
}))

//UPDATE PLOT ALT
plotRouter.patch('/plot/updates/:id', protect, asyncHandler(async(req, res) => {
    const {id} = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message: `This plot with this id: ${id} does not exist`})
            console.log('error with id')
        }
        const plotDetails = await PlotDetails.findById(id)

        if (plotDetails) {
            plotDetails.properties.Status = req.body.status || plotDetails.properties.Status
            plotDetails.client.fullName = req.body.fullName || plotDetails.client.fullName
            plotDetails.client.phone = req.body.phone || plotDetails.client.phone
            plotDetails.client.email = req.body.email || plotDetails.client.email
            plotDetails.client.address = req.body.address || plotDetails.client.address
            plotDetails.client.agent = req.body.agent || plotDetails.client.agent
            plotDetails.client.totalAmount = req.body.totalAmount || plotDetails.client.totalAmount
            plotDetails.client.paidAmount = req.body.paidAmount || plotDetails.client.paidAmount
            plotDetails.client.remainingAmount = req.body.remainingAmount || plotDetails.client.remainingAmount

            const newPlot = await plotDetails.save()

            res.status(200).json(newPlot)

        } else {
            res.status(404).json({message: 'Plot not found'})
        }

    } catch (error) {
        res.status(404).json({message: `Sorry Something went wrong`})
        console.log(error)
    }
}))


//SEARCH PLOT
plotRouter.get('/search', protect, asyncHandler(async(req, res) => {

    const keyword = req.query.keyword
    
    const plots = await PlotDetails.find({
        $or: [
            { "properties.Plot_No" : { $in: keyword } },
        ]
    })

    try {
        if (plots) {
            res.json(plots)

        } else {
            res.status(404).json({message: 'No Plot found with your search'})
        }
    } catch (error) {
        res.status(401).json({message: 'Sorry Something went wrong, try again'})
        console.log(error)
    }
}))

module.exports = plotRouter