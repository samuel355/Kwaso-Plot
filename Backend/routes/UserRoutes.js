const express = require('express')
const UserModel = require('../Models/UserModel.js')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken.js')
const protect = require('../Middleware/AuthMiddleware.js')
const bcrypt = require('bcryptjs')

const userRouter = express.Router()

//REGISTER
userRouter.post('/register', asyncHandler(async(req, res) => {
    const {name, email, password} = req.body
    const userExists = await UserModel.findOne({email})

    if (userExists) {
        res.status(400).json({message: `User already exists. Login with this email : ${email}`})
    }
    const salt = await bcrypt.genSalt(15)
    const hashPassword = await bcrypt.hash(password, salt)
    const user = await UserModel.create({
        name,
        email,
        password: hashPassword
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({message: 'Error occurred! Kindly check all inputs and register again'})
    }
}))

//LOGIN
userRouter.post('/login', asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email})

    if(user) {
        const checkPassword = await bcrypt.compare(password, user.password)
        if(checkPassword){

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
                createdAt: user.createdAt
            })
        }else{
            res.status(401).json({message: 'Your Password or Email is incorrect'})
        }
    }else{
        res.status(401).json({message: 'Your Email or Password is incorrect'})
    }

}))


//GET PROFILE
userRouter.get('/profile', protect, asyncHandler(async(req, res) => {
    const user = await UserModel.findById(req.user._id)

    if (user) {
        res.json({
            _id : user._id,
            name: user.name,
            email: user.email,
            createdAt : user.createdAt
        })
        
    } else {
        res.status(404).json({message: 'User not found'})
    }

}))

//UPDATE PROFILE
userRouter.put('/profile', protect, asyncHandler(async(req, res) => {
    const user = await UserModel.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name 
        user.email = req.body.email || user.email
        if(req.body.password){
            const salt = await bcrypt.genSalt(15)
            const hashPassword = await bcrypt.hash(req.body.password, salt)
            user.password = hashPassword
        }
        const updatedUser = await user.save()
        res.json({
            _id : updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            createdAt : updatedUser.createdAt,
            token: generateToken(updatedUser._id)
        })
    } else {
        res.status(404).json({message: 'User not found'})
    }

}))

//FETCH USERS BY ADMIN
userRouter.get('/users', protect, asyncHandler(async(req, res) => {
    const user = await UserModel.find()

    if (user) {
        res.status(200).json(user)
        
    } else {
        res.status(404).json({message: 'User not found'})
    }

}))

//FETCH USERS BY ADMIN
userRouter.get('/users', protect, asyncHandler(async(req, res) => {
    const user = await UserModel.find()

    if (user) {
        res.status(200).json(user)
        
    } else {
        res.status(404).json({message: 'User not found'})
    }

}))

//SEARCH USER BY NAME
userRouter.get('/users/search', protect, asyncHandler(async(req, res) => {
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: "i"
        }

    }: {};
    
    const users = await UserModel.find({...keyword})

    if (users) {
        res.status(200).json(...users)
        
    } else {
        res.status(404).json({message: `No User found with this search - ${keyword}`})
    }

}))

//SEARCH USER NAME AND EMAIL
userRouter.get('/users/try-search', protect, asyncHandler(async(req, res) => {
    const keyword = req.query.keyword
    
    const users = await UserModel.find({
        $or: [
            { name: { $regex: keyword } },
            { email: { $regex: keyword } },
        ],
    })

    if (users) {
        res.status(200).json(users)
        
    } else {
        res.status(404).json({message: `No User found with this search - ${keyword}`})
    }

}))

module.exports = userRouter;