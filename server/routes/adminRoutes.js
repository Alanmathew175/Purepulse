const express=require('express')
const {verifyToken}=require('../middleware/auth')
const router=express.Router()
const admin=require('../controller/admin')

router.route('/').post( admin.postLogin)

router.route('/get-doctor-details').get(verifyToken,admin.getDoctorDetails)
module.exports = router