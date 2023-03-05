const mongoose =require('mongoose')
const doctorSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    isDoctor:{
        type:Boolean,
        default:true
    },mobile:{
        type:Number,
        required:true,
        trim:true
    } ,specialization:{
        type:String,
        required:true,
        trim:true
    },hospital:{
        type:String,
        required:true,
        trim:true
    },experience:{
        type:Number,
        required:true,
        trim:true
    },clinic:{
        type:String,
        required:true,
        trim:true
    },address:{
        type:String,
        required:true,
        trim:true
    },image:{
        type:String,
        required:true,
        trim:true
    },idProof:{
        type:String,
        required:true,
        trim:true
    },licence:{
        type:String,
        required:true,
        trim:true
    }
})
module.exports=mongoose.model('doctor',doctorSchema)