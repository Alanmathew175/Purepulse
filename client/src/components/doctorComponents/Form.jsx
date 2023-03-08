import  React,{useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import PersonelForm from "./PersonelForm";
import PracticeForm from "./PracticeForm";
import Confirmation from "./Confirmation";
import { useSelector, useDispatch } from "react-redux";
import { updateDoctorData } from "../../redux/doctorSlice";
import apiCalls from "../../apiCalls/doctorApiCalls";
import {useNavigate} from "react-router-dom"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from "@mui/material";

const steps = ["Personel information ", "professional life", "Confirmation"];

export default function Form() {

    const [activeStep, setActiveStep] = useState(0);
    const [error,setError]=useState('')
    const userData = useSelector((state) => state.doctor.doctorData);
    const {firstname,lastname,mobile,password,specialization,hospital,experience,email,clinic,address,image,idProof,licence}=userData
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setError('')
    };
    
    window.addEventListener("beforeunload", function() {
        localStorage.removeItem('licence');
        localStorage.removeItem('image');
        localStorage.removeItem('idProof');
      });


    const handleSubmit=async()=>{
        // const image = localStorage.getItem('image')
        // const idProof =localStorage.getItem('idProof')
        // const licence = localStorage.getItem('licence')
        if (firstname||lastname||mobile||password||specialization||hospital||experience||email||clinic||address||image||idProof||licence) {
            // dispatch(updateDoctorData({...userData,image,idProof,licence}))
            console.log(userData);
            console.log('hgh');
            setOpen(!open)
            const response=await apiCalls.doDoctorRegisteration(userData)

            if (response.message) {
                setOpen(false);
                localStorage.removeItem('image')
                localStorage.removeItem('idProof')
                localStorage.removeItem('licence')
                dispatch(updateDoctorData([]))
                navigate('/doctor-complete-registeration')
            } else {
                setOpen(false);
                setError(response.error)
            }
        } else {
            setError('All fields are required')
        }
           

    }

    return (
       
            <Box sx={{ width: "100%" }} mt={6}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label} >
                            <StepLabel >{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {(() => {
                    switch (activeStep) {
                        case 0:
                            return <PersonelForm />;
                        case 1:
                            return <PracticeForm />;
                            case 2:
                                return <Confirmation error={error} />;
                        default:
                            return null;
                    }
                })()}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 2,
                       
                    }}
                >
                    {activeStep > 0 && (
                        <Button variant="contained" onClick={handleBack}>
                            Back
                        </Button>
                    )}
                    {activeStep===2? <Button
                        variant="contained"
                        sx={{ ml: 2 }}
                        onClick={handleSubmit}
                    >
                      Submit
                    </Button>:
                    <Button
                        variant="contained"
                        sx={{ ml: 2 }}
                        onClick={handleNext}
                    >
                       Next
                    </Button>
                        }
                        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Typography>Please wait your application is being submitting</Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
                </Box>
            </Box>
    
    );
}
