const mongoose = require ("mongoose")

const PlotDetailSchema = mongoose.Schema({
    type: { type: String, enum: ['Feature']},
    geometry: {
        type: { type: String, enum: ['Polygon']},
        coordinates: { type: [[[Number]]]},
    },
    properties: {
        OBJECTID: {type: Number,required: true, unique: true},
        Name: {type: String}, 
        Phone: {type: String},
        Plot_No: {type: Number},
        Status: {type: String},
        For: {type: String},
        Address: {type: String},
        Transantio: {type: String},
        Street_Nam: {type: String},
        Agent: {type: String},
        Area: {type: Number},
        Perimeter: {type: Number},
        Shape_Leng: {type: Number},
        SHAPE_Area: {type: Number},
        allDetails: {type: String},
    },
    client: {
        fullName: {type: String},
        email: {type: String},
        address: {type: String},
        phone: {type: Number},
        status: {type: String},
        agent: {type: String},
        totalAmount: {type: Number},
        paidAmount: {type: Number},
        remainingAmount: {type: Number},
    }
    
},{timestamps:true})

const PlotDetailModel = mongoose.model('PlotDetails', PlotDetailSchema)
module.exports = PlotDetailModel