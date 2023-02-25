require('dotenv').config()
require('./config/db')
const express=require('express')
const cors = require('cors')
const adminRoutes = require('./routes/adminRoutes')
const doctorRoutes = require('./routes/dotorsRoutes')
const userRoutes = require('./routes/userRoutes')
const app=express()

app.use(cors())
app.use(express.json())
//  app.use(express.urlencoded())
app.use('/',userRoutes);
// app.use('/admin',adminRoutes);
// app.use('/doctor',doctorRoutes);
app.listen(4000,()=>console.log('server connected'))