const express=require('express')
const router=express.Router()
const user=require('../controller/user')

router.route('/login').post( user.postLogin)
router.route('/register').post (user.postRegister)
module.exports = router