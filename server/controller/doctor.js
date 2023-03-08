const Doctor = require("../models/doctorModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const {cloudinary}=require('../config/cloudinary')
const tokenSecret = process.env.SECRET;
exports.registeration =async (req, res) => {
    try {
        const {
            fname,
            lname,
            mobile,
            password,
            specialization,
            hospital,
            experience,
            email,
            clinic,
            address,
            image,
            idProof,
            licence,
        } = req.body;
       
        const isExist=await Doctor.findOne({email})
        
        if (isExist) {
            res.status(400).json({error:'An application with same email already exist'})
        } else {
            console.log('hello')
            const imageURL=await cloudinary.uploader.upload(image)
        const idProofURL=await cloudinary.uploader.upload(idProof)
        const licenceURL=await cloudinary.uploader.upload(licence)
        const name=fname+' '+lname
        console.log(name);
        const doctor= await new Doctor({
             name,
            mobile,
            password,
            specialization,
            hospital,
            experience,
            email,
            clinic,
            address,
            image:imageURL.url,
            idProof:idProofURL.url,
            licence:licenceURL.url
        })
        const doctorData=await doctor.save()
        console.log(doctorData);
        if (doctorData) {
            res.status(200).json({message:'Application send successfully'})
            
        } else {
            res.send(500).json({error:'Something went wrong'})
         
        }
        }
    } catch (error) {
       
        console.log(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
    
  
    
    
}
