import * as Yup from 'yup'

export const userLoginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
})

export const userRegisterSchema = Yup.object({
    name : Yup.string().min(2).max(15).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
    conformPassword:Yup.string().required("Please conform your password").oneOf([Yup.ref("password"),null],"Password must match")
})