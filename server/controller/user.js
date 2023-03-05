const Users = require("../models/userModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const tokenSecret = process.env.SECRET;
exports.postRegister = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await Users.findOne({ email });

    if (!userExist) {
        const passwordHashed = await bcrypt.hash(password, 10);

        const user = new Users({ name, email, password: passwordHashed });
        const userData = await user.save();

        if (userData) {
           
            res.json({ status: "ok" });
        } else {
            res.json({ status: "error", error: "Something went wrong" });
        }
    } else {
        res.json({
            status: "error",
            error: "This email address already exist",
        });
    }
});
exports.postLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const userData = await Users.findOne({ email });
   
    if (userData) {
        const passwordTrue = await bcrypt.compare(password, userData.password);

        if (passwordTrue) {
            const token = jwt.sign(
                {
                    email: userData.email,
                },
                tokenSecret
            );

            res.json({ status: "ok", user: token });
        } else {
            // res.json({
            //     status: "error",
            //     error: "Email or password is incorrect",
            // });
            res.status(400).json({
                error: "Email or password is incorrect"
            })
        }
    } else {
        res.status(400).json({
            error: "Email or password is incorrect"
        })
    }
});
