import React ,{useState,useEffect}from 'react'
import { TextField,Stack,Typography,Box} from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { updateDoctorData } from "../../redux/doctorSlice";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
const PracticeForm = () => {
  const userData = useSelector((state) => state.doctor.doctorData);
  const [licence,setLicence]=useState('')
  const dispatch = useDispatch();
  const previewFile=(file)=>{
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend=()=>{
      
        setLicence(reader.result)
      
        
      localStorage.setItem('licence',reader.result)
    }
  }
  const handleFileChange=(e)=>{
    
    const file=e.target.files[0]
  
    previewFile(file)
   
  }
  useEffect(()=>{
   
    setLicence(localStorage.getItem('licence'))
  },[])
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
        <Stack direction='row' spacing={2}>
        <TextField
                            label="Specialization"
                            value={userData["specialization"]}
                            onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        specialization: e.target.value,
                                    })
                                )
                            }
                        />
        <TextField
                            label="Experience"
                            type='number'
                            value={userData["experience"]}
                            onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        experience: e.target.value,
                                    })
                                )
                            }
                        />
        </Stack>
       
        <TextField label=" Clinic address"  value={userData["clinic"]} rows={2} multiline fullWidth   onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        clinic: e.target.value,
                                    })
                                )
                            }/>
       
        <TextField
                            label="Current Hospital"
                            value={userData["hospital"]}
                            fullWidth
                            onChange={(e) =>
                                dispatch(
                                    updateDoctorData({
                                        ...userData,
                                        hospital: e.target.value,
                                    })
                                )
                            }
                        />
      <Stack direction="row" spacing={2}>
      <Typography variant="body1" mt={1}>
                            Upload Medical licence
                        </Typography>
                        <IconButton
                            color="info.main"
                            aria-label="upload picture"
                            component="label"
                        >
                            <input name="licence" hidden accept="image/*" type="file"  onChange={handleFileChange}/>
                            <PhotoCamera />
                        </IconButton>
                        </Stack>
                        {licence&&
                    <Stack width={130} height={130}>
                    
                        <Box component="img"
        src={licence}
        alt="banner-main"
        sx={{
            height:"auto",
            maxWidth: '100%',
            marginTop:{xs:1,sm:1.5,md:2,lg:3}
          }}
        />
                      </Stack>}
       
      </Stack>
      </Stack>
    </>
  )
}

export default PracticeForm

