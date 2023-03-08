import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputBase from "@mui/material/InputBase";
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import AdminMenu from "../../layoutes/AdminMenu";
import adminApiCalls from "../../apiCalls/adminApiCalls"
import { Table, TableHead, TableRow, TableCell, TableBody,Avatar,Button,Dialog,DialogTitle,DialogContent,DialogActions } from '@mui/material';
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#C0EEF2",
    "&:hover": {
        backgroundColor: "C0EEF2",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
          width: "12ch",
          "&:focus": {
              width: "20ch",
          },
      },
  },
}));






const Doctor = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [newDoctors,setNewDoctors]=useState([])
  console.log(newDoctors);
  const [error,setError]=useState('')
  const getDetails=async()=>{
    const response= await adminApiCalls.getDoctorDeatails()
    if (response.error) {
      setError(error)
    } else {
      setNewDoctors(response)
    }
  }
  const handleApprove=(data)=>{
      console.log(data);
  }
  useEffect(()=>{
     getDetails()
        
  },[error])
    return (
        <>
            <Stack direction="row">
                <AdminMenu page="Doctors" />
               <Stack>
               <Stack  direction="row"
  sx={{
    marginX: { sm: 18, lg: 35 },
   
    borderRadius: 8,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
  }}
>
  <Box sx={{ flexGrow: 1 }}>
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Toolbar>
  </Box>
  <EmailIcon
    fontSize="large"
    sx={{ marginX: 1.5, marginTop: 2.5, color: "warning.main" }}
  />
  <NotificationsIcon
    fontSize="large"
    sx={{ marginX: 1.5, marginTop: 2.5, color: "warning.main" }}
  />
</Stack>
                
                <Table sx={{ 
  mx: 'auto',
  marginTop:4,
  width: '80%',
  border: '1px solid gray',
  borderRadius: 5,
  overflow: 'hidden',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
}}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ 
        fontWeight: 'bold', 
        fontSize: 14, 
        color: 'white',
        backgroundColor: '#301E67'
      }}>Profile</TableCell>
          <TableCell sx={{ 
        fontWeight: 'bold', 
        fontSize: 14, 
        color: 'white',
        backgroundColor: '#301E67'
      }}>Full name</TableCell>
          <TableCell sx={{ 
        fontWeight: 'bold', 
        fontSize: 14, 
        color: 'white',
        backgroundColor: '#301E67'
      }}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {newDoctors.map((row) => (
         <TableRow key={row._id}>
             <TableCell><Avatar src={row.image} sx={{marginLeft:2}}/></TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell><Button onClick={()=>handleApprove(row)}>View Details</Button></TableCell>
          </TableRow>
          
        ))}
      </TableBody>
    </Table>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <p>Dialog content goes here.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Reject
          </Button>
          <Button onClick={handleClose} color="primary">
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
            </Stack>
        </>
    );
};

export default Doctor;
