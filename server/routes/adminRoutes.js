const express=require('express')
const router=express.Router()
const admin=require('../controller/admin')

router.route('/').post( admin.postLogin)
module.exports = router