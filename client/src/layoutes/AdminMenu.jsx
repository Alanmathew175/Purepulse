import React from "react";
import {
    Stack,
    List,
    ListItem,
    ListItemText,
    Typography,
    useMediaQuery,
    Drawer,
    Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import LogoutIcon from "@mui/icons-material/Logout";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";
const AdminMenu = (props) => {
    const isSelected=props.page
    
  const navigate=useNavigate()
    const isAboveLgScreen = useMediaQuery((theme) =>
        theme.breakpoints.up("lg")
    );
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(open);
    };
    const signOut=()=>{
      localStorage.removeItem('token')
      navigate('/admin')
    }
    return (
        <>
            {isAboveLgScreen ? (
                <Stack
                    sx={{
                        bgcolor: "secondary.main",
                        maxWidth: 260,
                        height: "91vh",
                       color:"warning.main",
                       
                        padding: 4,
                    }}
                >
                    <Typography
                        variant="h5"
                        color="warning.main"
                        sx={{ marginLeft: 2, fontWeight: 700 }}
                    >
                        PurePulse
                    </Typography>

                    <List sx={{ marginTop: 5 }}>
                        <ListItem sx={{'&:hover':{
                          color:'primary.main',
                          cursor:'pointer'
                        }}}
                        onClick={()=>navigate('/admin/admin-dashboard')}
                        >
                            <DashboardIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem  sx={{color:isSelected==="Doctors"?"primary.main":"warning.main",'&:hover':{
                          color:'primary.main',
                          cursor:'pointer'
                        }}}
                        onClick={()=>navigate('/admin/admin-doctors')}>
                            <LocalHospitalIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Doctors" />
                        </ListItem >
                        <ListItem sx={{'&:hover':{
                          color:'primary.main',
                          cursor:'pointer'
                        }}} onClick={()=>navigate('/admin/admin-services')}>
                            <ManageAccountsIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Services" />
                        </ListItem>
                        <ListItem sx={{'&:hover':{
                          color:'primary.main',
                          cursor:'pointer'
                        }}} onClick={()=>navigate('/admin/admin-bookings')}>
                            <BookOnlineIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Bookings" />
                        </ListItem>
                        <ListItem sx={{'&:hover':{
                          color:'primary.main',
                          cursor:'pointer'
                        }}}onClick={()=>navigate('/admin/admin-users')}>
                            <GroupAddIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Users" />
                        </ListItem>
                        <ListItem sx={{'&:hover':{
                          color:'primary.main',
                          cursor:'pointer'
                        }}} onClick={()=>navigate('/admin/admin-blogs')}>
                            <ViewCarouselIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Blogs" />
                        </ListItem>
                        <ListItem sx={{'&:hover':{
                          color:'primary.main',
                          cursor:'pointer'
                        }}} onClick={signOut}>
                            <LogoutIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Sign out" />
                        </ListItem>
                    </List>
                </Stack>
            ) : (
                <Box>
                    <IconButton
                        edge="start"
                        color="secondary"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon fontSize="large" sx={{ marginTop: 1.8 }} />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        PaperProps={{
                            sx: {
                                backgroundColor: "#301E67",
                                color: "#C0EEF2",
                            },
                        }}
                        open={open}
                        onClose={toggleDrawer(false)}
                    >
                        <Box
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List
                                sx={{
                                    width: 300,
                                    paddingLeft: 3,
                                    paddingY: 2,
                                }}
                            >
                                <ListItem  onClick={()=>navigate('/admin/admin-dashboard')}>
                                    <DashboardIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Dashboard" />
                                </ListItem>
                                <ListItem onClick={()=>navigate('/admin/admin-doctors')}>
                                    <LocalHospitalIcon
                                        sx={{ marginRight: 2 }}
                                    />
                                    <ListItemText primary="Doctors" />
                                </ListItem>
                                <ListItem onClick={()=>navigate('/admin/admin-services')}>
                                    <ManageAccountsIcon
                                        sx={{ marginRight: 2 }}
                                    />
                                    <ListItemText primary="Services" />
                                </ListItem>
                                <ListItem onClick={()=>navigate('/admin/admin-bookings')}>
                                    <BookOnlineIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Bookings" />
                                </ListItem>
                                <ListItem onClick={()=>navigate('/admin/admin-users')}>
                                    <GroupAddIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Users" />
                                </ListItem>
                                <ListItem onClick={()=>navigate('/admin/admin-blogs')}>
                                    <ViewCarouselIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Blogs" />
                                </ListItem>
                                <ListItem onClick={signOut}>
                                    <LogoutIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Sign out" />
                                </ListItem>
                            </List>{" "}
                        </Box>
                    </Drawer>
                </Box>
            )}
           
        </>
    );
};

export default AdminMenu;
