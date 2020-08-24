const express = require('express')
const morgan = require('morgan')
const boydParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

//app section
const app = express()

//port
const PORT = process.env.PORT || 3000

//console.log(express)
mongoose.connect('mongodb://localhost:27017/contacts-db', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err);
})
db.once('open', () => {
    console.log("server is conected");
})

//external router
const contactRouter = require('./api/routes/Contact')
const aboutRouter = require('./api/routes/About')
const userRouter = require('./api/routes/userRouter')

//Package 
app.use(morgan('dev'))
app.use(boydParser.urlencoded({ extended: true }))
app.use(boydParser.json())
app.use(cors())

//external router use
app.use('/contact', contactRouter)
app.use('/about', aboutRouter)
app.use('/user',userRouter)

//middleware function
app.get('/', (req, res) => {
    res.send('<center><h1>pocha Sanjida</h1></center>')
})

//this is for terminal show
app.listen(PORT, () => {
    console.log(`Server is runing in port ${PORT}`);
})