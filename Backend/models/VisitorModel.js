const mongoose = require('mongoose')

const visitorSchema = mongoose.Schema({
    fullname: String,
    email: String,
    address: String,
    country: String,
    phone: String,
    option: String,
    plotDetails: String,
}, {timestamps: true})

const VisitorModel = mongoose.model('Visitor', visitorSchema)
module.exports = VisitorModel