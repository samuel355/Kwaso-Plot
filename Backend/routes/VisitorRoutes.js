const express = require('express')
const asyncHandler = require('express-async-handler')
const VisitorModel = require('../models/VisitorModel.js')
const nodemailer = require('nodemailer')

const visitorRouter = express.Router()

visitorRouter.post('/interests', asyncHandler(async(req, res) => {
    const {fullname, email, country, phone, address, option, plotDetails} = req.body

    //Email 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'addsamuel355@gmail.com',
          pass: 'ljhxurlbacagrtuc'
        }
    });

    var mailOptions = {
        from: 'addsamuel355@gmail.com',
        to: email,
        subject: 'Plot Sending Email',
        html: '<h1>Thank you for your interest in our plots</h1><p>That was easy!</p>'
    };

    try {
        const visitor = await VisitorModel.create({
            fullname,
            email,
            country,
            phone,
            address,
            option,
            plotDetails,
        })

        if(visitor){
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                    res.status(200).send(info.response)
                    res.json({message: 'Thank you for your message, kindly check your email for the necessary action'})
                    console.log('Email sent: ' + info.response);
                }
            });
            res.status(201).json(visitor)
        }else{
            res.status(401).json({message: 'Error occurred saving visitor details'})
        }
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }

}))

module.exports = visitorRouter