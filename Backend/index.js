const express = require('express') 
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./mongoDbConnect.js');
const userRouter = require('./routes/UserRoutes.js');
const plotRouter = require('./routes/PlotRoutes.js');
const visitorRouter = require('./routes/VisitorRoutes.js');

dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4000

//mongo db connect 
connectDB()

app.get('/api', (req, res) => {
    res.send(`Here we go again and server is running on port ${port}`)
})

app.use('/api', userRouter) //User Router
app.use('/api', plotRouter)
app.use('/api', visitorRouter)

app.listen(port, console.log(`The Server is running on port ${port}`));