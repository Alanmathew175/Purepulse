import React, {useEffect, useState } from "react";
import { TextField, Stack, Typography,Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useSelector, useDispatch } from "react-redux";
import { updateDoctorData } from "../../redux/doctorSlice";
const PersonelForm = () => {
    const userData = useSelector((state) => state.doctor.doctorData);

    const dispatch = useDispatch();
    
    const [preview,setPreview]=useState('')
    const [idProof,setIdProof]=useState('')
    const [Confirmpassword,setConfirmPassword]=useState('')
    const [error,setError]=useState('')
    const previewFile=(file,name)=>{
      const reader=new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend=()=>{
        if (name==='image') {
          setPreview(reader.result)
        }else {
          setIdProof(reader.result)
        }
        
        localStorage.setItem(`${name}`,reader.result)
      }
    }
   const handleChange=(e)=>{
        setConfirmPassword(e.target.value)
        console.log(Confirmpassword);
        if (Confirmpassword!==userData['password']) {
          setError('password must be same')
        }else{
          setError('')
        }
   }

    const handleFileChange=(e)=>{
      const name=e.target.name
      const file=e.target.files[0]
    
      previewFile(file,name)
     
    }
    useEffect(()=>{
      setPreview(localStorage.getItem('image'))
      setIdProof(localStorage.getItem('idProof'))
    },[preview,idProof])
    
  
    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "warning.main",
                        padding: 4,
                        marginTop: 2,
                    }}
                >
                    <Stack direction="row" spacing={5} bgcolor="warming.main">
                        <TextField
                            label="First name"
                            value={userData["firstname"]}
                            onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        fullname: e.target.value,
                                    })
                                )
                            }
                        />
                        <TextField
                            label="Last name"
                            value={userData["lastname"]}
                            onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        lastname: e.target.value,
                                    })
                                )
                            }
                        />
                    </Stack>
                    <Stack direction="row" spacing={5}>
                        <TextField
                            label="Mobile"
                            value={userData["mobile"]}
                            onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        mobile: e.target.value,
                                    })
                                )
                            }
                        />
                        <TextField
                            label="email"
                            value={userData["email"]}
                            onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        email: e.target.value,
                                    })
                                )
                            }
                        />
                    </Stack>
                    
                    <TextField label="Address"  value={userData["address"]} rows={2} multiline fullWidth   onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        address: e.target.value,
                                    })
                                )
                            }/>
                            <Stack direction="row" spacing={2}>
                        <TextField
                            label="Password"
                            type='password'
                            
                           
                            onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        password: e.target.value,
                                    })
                                )
                            }
                        />
                        <TextField
                            label="Confirm password"
                            value={Confirmpassword}
                            helperText={error}
                              
                          
                            onChange={handleChange}
                           
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="body1" mt={1}>
                            Upload your Id proof
                        </Typography>
                        <IconButton
                            color="info.main"
                            aria-label="upload picture"
                            component="label"
                        >
                            <input name="idProof" hidden accept="image/*" type="file" onChange={handleFileChange} />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>
                    {idProof&&
                    <Stack width={130} height={130}>
                    
                        <Box component="img"
        src={idProof}
        alt="banner-main"
        sx={{
            height:"auto",
            maxWidth: '100%',
            marginTop:{xs:1,sm:1.5,md:2,lg:3}
          }}
        />
                      </Stack>}
                    <Stack direction="row" spacing={2} >
                        <Typography variant="body1" mt={1} >
                            Upload your image
                        </Typography>
                        <IconButton
                            color="info.main"
                            aria-label="upload picture"
                            component="label"
                        >
                            <input hidden name="image" accept="image/*" type="file" onChange={handleFileChange}  />
                            <PhotoCamera />
                        </IconButton>
                 
                    </Stack>
                    {preview&&
                    <Stack width={130} height={130} >
                    
                        <Box component="img"
        src={preview}
        alt="banner-main"
        sx={{
            height:"auto",
            maxWidth: '100%',
            marginTop:{xs:1,sm:1.5,md:2,lg:3}
          }}
        />
                      </Stack> }
           
                </Stack>
            </Stack>
        </>
    );
};

export default PersonelForm;
