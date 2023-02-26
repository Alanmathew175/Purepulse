const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const tokenSecret = process.env.SECRET;



exports.postLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  

     const userData = await Admin.findOne({ email });


    if (userData) {
       

        if (password===userData.password) {
            const token = jwt.sign(
                {
                    email: userData.email,
                },
                tokenSecret
            );

            res.json({ status: "ok", admin: token });
        } else {
            res.json({
                status: "error",
                error: "Email or password is incorrect",
            });
        }
    } else {
        res.json({ status: "error", error: "Email or password is incorrect" });
    }
});