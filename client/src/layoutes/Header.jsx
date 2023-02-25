import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import Purepulse from "../assets/Purepulse.png";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CallIcon from "@mui/icons-material/Call";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import CatchingPokemonRoundedIcon from "@mui/icons-material/CatchingPokemonRounded";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PersonIcon from "@mui/icons-material/Person";
import { useState,useEffect } from "react";
// import {useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate();
    const [isLogin,setLogin]=useState('Login')
    const isAboveLgScreen = useMediaQuery((theme) =>
        theme.breakpoints.up("lg")
    );
  
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token) {
            
            setLogin('My Account')
        }else{
            setLogin('Login')
        }
    },[isLogin])
    const handleLogin=()=>{
     
        if(isLogin!=='Login'){
           
            navigate('/my-account')
        }else{
            navigate('/user/login')
        }
    }
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
    return (
        <Stack>
            <Stack
                direction="row"
                sx={{
                    bgcolor: "#FFFFFF",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Stack>
                    <Box
                        component="img"
                        src={Purepulse}
                        alt="Example"
                        sx={{
                            height: "auto",
                            width: { xs: 35, sm: 45, md: 55 },

                            marginLeft: { xs: 1, sm: 2 },
                        }}
                    />
                    <Typography
                        color="secondary"
                        sx={{ marginLeft: { xs: 1, sm: 1.8, md: 2.4 } }}
                        xs={12}
                        sm={6}
                        md={4}
                        variant="h6"
                        fontWeight={600}
                    >
                        PurePulse
                    </Typography>
                </Stack>
                {isAboveLgScreen ? (
                    <Stack direction="row" sx={{ marginRight: 9 }}>
                        <HeadsetMicIcon
                            color="secondary"
                            fontSize="large"
                            sx={{ marginTop: 3 }}
                        />
                        <Stack>
                            <Typography
                                color="secondary"
                                sx={{ marginX: 2 }}
                                mt={2.3}
                            >
                                24x7 online support
                            </Typography>
                            <Typography
                                color="primary"
                                variant="h6"
                                sx={{ fontWeight: 600, marginX: 2 }}
                            >
                                contact@purepulse.live
                            </Typography>
                        </Stack>
                        <Stack>
                            <CallIcon
                                color="secondary"
                                fontSize="large"
                                sx={{ marginTop: 3 }}
                            />
                        </Stack>
                        <Stack>
                            <Typography
                                color="secondary"
                                sx={{ marginX: 2 }}
                                mt={2.3}
                            >
                                Contact Us Free
                            </Typography>
                            <Typography
                                color="primary"
                                variant="h6"
                                sx={{ fontWeight: 600, marginX: 2 }}
                            >
                                7306290147
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <FacebookRoundedIcon
                                color="secondary"
                                fontSize="large"
                                sx={{ marginTop: 3 }}
                            />
                            <PlayCircleFilledWhiteRoundedIcon
                                color="secondary"
                                fontSize="large"
                                sx={{ marginTop: 3 }}
                            />
                            <CatchingPokemonRoundedIcon
                                color="secondary"
                                fontSize="large"
                                sx={{ marginTop: 3 }}
                            />
                        </Stack>
                    </Stack>
                ) : (
                    <Box>
                        <IconButton
                            edge="start"
                            color="secondary"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon fontSize="large" sx={{ marginTop: 3 }} />
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
                                    <ListItem>
                                        <HomeIcon sx={{ marginRight: 2 }} />
                                        <ListItemText
                                            onClick={() => navigate("/")}
                                            primary="Home"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <InfoIcon sx={{ marginRight: 2 }} />
                                        <ListItemText
                                         onClick={() => navigate("/about")}
                                          primary="About" />
                                    </ListItem>
                                    <ListItem>
                                        <MedicalServicesIcon
                                            sx={{ marginRight: 2 }}
                                        />
                                        <ListItemText primary="Services" />
                                    </ListItem>
                                    <ListItem>
                                        <AutoStoriesIcon
                                            sx={{ marginRight: 2 }}
                                        />
                                        <ListItemText primary="Blogs" />
                                    </ListItem>
                                    <ListItem>
                                        <ConnectWithoutContactIcon
                                            sx={{ marginRight: 2 }}
                                        />
                                        <ListItemText primary="Contact" />
                                    </ListItem>
                                    <ListItem>
                                        <PersonIcon sx={{ marginRight: 2 }} />
                                        <ListItemText
                                            onClick={handleLogin}
                                            primary={isLogin}
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                )}
            </Stack>
            {isAboveLgScreen && (
                <Stack
                    direction="row"
                    sx={{
                        display: "flex",
                        bgcolor: "#D9D9D9",
                        justifyContent: "space-around",
                        paddingY: 3,
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 700, cursor: "pointer" }}
                        color="primary"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 700, cursor: "pointer" }}
                        color="primary"
                        onClick={() => navigate("/about")}
                    >
                        About
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 700, cursor: "pointer" }}
                        color="primary"
                    >
                        Services
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 700, cursor: "pointer" }}
                        color="primary"
                    >
                        Blogs
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 700, cursor: "pointer" }}
                        color="primary"
                    >
                        Contact
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 700, cursor: "pointer" }}
                        color="primary"
                        onClick={() => navigate("/user/login")}
                    >
                      {isLogin}
                    </Typography>
                </Stack>
            )}
        </Stack>
    );
};

export default Header;
