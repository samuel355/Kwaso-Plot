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
            plot.properties.Name = req.body.name || plot.properties.Name 
            plot.properties.Phone = req.body.phone || plot.properties.Phone 
            plot.properties.Status = req.body.status || plot.properties.Status
            
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