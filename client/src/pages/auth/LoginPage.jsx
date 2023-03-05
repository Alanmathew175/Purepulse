import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { useFormik } from "formik";
import { userLoginSchema, userRegisterSchema } from "../../schema/UserSchema";
import Typography from "@mui/material/Typography";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import React, { useState,useEffect } from "react";
import apiCalls from "../../apiCalls/userApiCalls";
import { useNavigate } from "react-router";
import {Dialog} from "@mui/material";




const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
    color: "#537FE7",
}));

const LoginPage = (props) => {
    const isUser = props.access === 'user';
    const isAdmin = props.access === 'Admin';
    const navigate = useNavigate();
    useEffect(()=>{
        const user=localStorage.getItem('token')
         const admin=localStorage.getItem('Admintoken')
        isUser&&user&&navigate('/',{replace:true})
        isAdmin&&admin&&navigate('/admin/admin-dashboard',{replace:true})
    })
    
   
    const [value, setValue] = React.useState(0);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  


    
    const registerFormValues = {
        name: "",
        email: "",
        password: "",
        conformPassword: "",
    };
    const loginFormValues = {
        email: "",
        password: "",
    };

    const initialValues = () => {
        return !value ? loginFormValues : registerFormValues;
    };
    const schema = () => {
        return !value ? userLoginSchema : userRegisterSchema;
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
        Formik.resetForm();
        setError("");

        Formik.setValues({
            name: "",
            email: "",
            password: "",
            conformPassword: "",
        });
    };
    
    const Formik = useFormik({
        initialValues: initialValues(),
        validationSchema: schema(),
        onSubmit: async (values) => {
            if (values.name) {
                const response = await apiCalls.register(values);
                if (response.status === "error") {
                    setError(response.error);
                } else {
                    setValue(0);
                    Formik.resetForm();
                }
            } else {

                if (isUser) {
                    const response = await apiCalls.login(values);
                  
                    if (response.user) {
                        localStorage.setItem("token", response.user);
                  
                        navigate("/");
                    }else {
                        setError(response.error)
                    }
                   
                }
               
                 else if(isAdmin){
                  
                    const response = await apiCalls.adminLogin(values);
                    if (response.admin) {
                        localStorage.setItem("Admintoken", response.admin);
                    navigate('/admin/admin-dashboard')
                    } else {
                        setError(response.error)
                    }
                    
                }else {
                    
                }
            }
        },
    });

    return (
        <>
       
       <Dialog open={true} maxWidth="md" PaperProps={{ sx: {  boxShadow: 4} }}  BackdropProps={{ sx: { backgroundColor: '#1C1C30' } }}>
         
            <Container component="main" maxWidth="xs" sx={{bgcolor:'warning.main'}}>
                {props.access === "user" ? (
                    <Box
                        sx={{
                            marginTop: 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Tabs value={value} onChange={handleChange} centered>
                            <StyledTab label="Login" />
                            <StyledTab label="Register" />
                        </Tabs>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            marginTop: 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h5" color="primary">
                            {props.access} Login
                        </Typography>
                    </Box>
                )}
            </Container>
           
            <Container
                component="main"
                maxWidth="xs"
                sx={{ bgcolor: "#C0EEF2", padding: 2, borderRadius: 2 }}
            >
                <Box
                    sx={{
                       
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={Formik.handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        {value ? (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                value={Formik.values.name}
                                onChange={Formik.handleChange}
                                onBlur={Formik.handleBlur}
                                helperText={
                                    Formik.touched.name && Formik.errors.name
                                }
                                error={
                                    Boolean(Formik.touched.name) &&
                                    Boolean(Formik.errors.name)
                                }
                            />
                        ) : (
                            ""
                        )}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={Formik.values.email}
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                            helperText={
                                Formik.touched.email && Formik.errors.email
                            }
                            error={
                                Boolean(Formik.touched.email) &&
                                Boolean(Formik.errors.email)
                            }
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            id="password"
                            autoComplete="current-password"
                            value={Formik.values.password}
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                            helperText={
                                Formik.touched.password &&
                                Formik.errors.password
                            }
                            error={
                                Boolean(Formik.touched.password) &&
                                Boolean(Formik.errors.password)
                            }
                        />
                        {value ? (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="conformPassword"
                                label="Conform password"
                                type="password"
                                id="conformPassword"
                                value={Formik.values.conformPassword}
                                onChange={Formik.handleChange}
                                onBlur={Formik.handleBlur}
                                helperText={
                                    Formik.touched.conformPassword &&
                                    Formik.errors.conformPassword
                                }
                                error={
                                    Boolean(Formik.touched.conformPassword) &&
                                    Boolean(Formik.errors.conformPassword)
                                }
                            />
                        ) : (
                            ""
                        )}
                        {error && (
                            <Typography variant="body2" color="error">
                                {error}
                            </Typography>
                        )}

                        {value ? (
                            <Button
                                type="submit"
                                fullWidth
                                color="secondary"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                fullWidth
                                color="secondary"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        )}
                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item>
                                {value ? (
                                    ""
                                ) : (
                                    <Link
                                        href="#"
                                        variant="body2"
                                        sx={{
                                            textDecoration: "none",
                                            "&:hover": {
                                                color: "#301E67",
                                            },
                                        }}
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </Grid>
                        </Grid>
                       
                    </Box>
                </Box>
            </Container>
            </Dialog>
            
        </>
    );
};

export default LoginPage;
