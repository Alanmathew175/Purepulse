require('dotenv').config()
require('./config/db')
const express=require('express')
const cors = require('cors')
const adminRoutes = require('./routes/adminRoutes')
const doctorRoutes = require('./routes/dotorsRoutes')
const userRoutes = require('./routes/userRoutes')
const app=express()

app.use(cors())
app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({limit:'100mb'}))
app.use('/',userRoutes);
 app.use('/admin',adminRoutes);
 app.use('/doctor',doctorRoutes);
app.listen(4000,()=>console.log('server connected'))