import React from "react";
import AboutImage from "../../assets/About.jpg";
import { Box, Stack,useMediaQuery, Typography,Grid } from "@mui/material";
import CEO from "../../assets/CEO.jpg"
import Director from "../../assets/Director.jpg"
import Associate from "../../assets/Associate.jpg"
const AboutComponent = () => {
    const isAboveLgScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const team=[{post:CEO,name:'Dr.Pennylope'},{post:Director,name:'Dr.Segastey'},{post:Associate,name:'Mr.Robert Langton'}]
    return (
        <>
            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h4"
                    color="primary"
                    fontWeight={{ xs: 900 }}
                    mt={{ xs: 1, sm: 1.3, md: 1.6, lg: 3 }}
                    mb={{ xs: 1, sm: 1.3, md: 1.6, lg: 3 }}
                >
                    ABOUT US
                </Typography>
            </Stack>
            <Stack direction="row" bgcolor="warning.main" marginX={{xs:3,sm:5,md:7,lg:10}}>
                <Typography
                    sx={{ padding: {xs:4,sm:7,md:8,lg:14 }}}
                    component="h5"
                    color="primary.main"
                    fontWeight={{ xs: 700 }}
                >
                    PurePulse is a leading provider of Remote Care (Tele
                    Medicine & In-home care) services in India. Today, PurePulse
                    has become the foremost preference for remote care in India.
                    We proudly acclaim to provide superior quality health care
                    at affordable prices. We are Leading Home Health Agency in
                    India.
                </Typography>
                {isAboveLgScreen&&<Box
                    component="img"
                    src={AboutImage}
                    alt="About-image"
                    height="auto"
                    maxWidth={{md:300}}
                />}
            </Stack>
            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h4"
                    color="primary"
                    fontWeight={{ xs: 700 }}
                    mt={{ xs: 1, sm: 1.3, md: 1.6, lg: 3 }}
                    mb={{ xs: 1, sm: 1.3, md: 1.6, lg: 3 }}
                >
                    Team
                </Typography>
            </Stack>
            <Grid sm={6} lg={3} >
                {team.map((person,index)=>{
                   
                   
                   return<Box key={index} component="img"
                   src={person.post}
                   alt="person"
                   sx={{
                       height:"auto",
                       maxWidth: '30%',
                       marginTop:{xs:1,sm:1.5,md:2,lg:3},
                       marginX:{xs:1,sm:1.5,md:2}
                     }}
                 />
                            
                })}
            </Grid>
        </>
    );
};

export default AboutComponent;
