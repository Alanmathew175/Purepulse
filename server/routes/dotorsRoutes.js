const express=require('express')
const router=express.Router()
const doctor=require('../controller/doctor')

router.route('/registeration').post(doctor.registeration)

module.exports = router