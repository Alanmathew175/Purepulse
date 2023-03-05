import React from "react";
import { Stack, Box, Typography, Button, useMediaQuery } from "@mui/material";
import Doctor from "../../assets/doctor.png";

const Instructions = () => {
    const isBelowSmScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
);
    return (
        <>
          
            <Stack
                direction="row"
                sx={{
                    bgcolor: "primary.main",
                    display: "flex",
                    justifyContent:isBelowSmScreen?'center':'space-around',
                    alignItems:isBelowSmScreen&&'center'
                    
                }}
            >
                <Box
                    sx={{ paddingY: {xs:3,sm:4,md:6,lg:8},
                         color: "warning.light",
                         paddingX:3,
                         height: {xs:300,sm:265,md:340,lg:365}
                         }}
                    
                >
                    <Typography variant="h3" fontWeight={600} fontSize={{xs:20,sm:25,md:33,lg:40}} mb={{xs:0,sm:2}} marginX={{xs:8,sm:0}}>
                        PurePulse for doctors
                    </Typography>
                    {isBelowSmScreen&&  <Box
                    component="img"
                    src={Doctor}
                    alt="banner-main"
                    sx={{
                        height:189,
                        width: "auto",

                        objectFit: "cover",
                    }}
                />}
                    <Typography variant="h5" fontWeight={400} fontSize={{xs:15,sm:20,md:21,lg:27}} mb={2}>
                        Simple yet powerful solutions that are built to grow and
                        manage your practice.
                    </Typography>
                    {!isBelowSmScreen&&<Typography variant="h6" fontWeight={400} fontSize={{xs:10,sm:15,md:18,lg:25}} mb={2}>
                        Manage your practice efficiently, engage with patients
                        to offer them a premium experience, or increase your
                        availability
                    </Typography>}
                    
                </Box>
                    {!isBelowSmScreen&&  <Box
                    component="img"
                    src={Doctor}
                    alt="banner-main"
                    sx={{
                        height: {sm:265,md:340,lg:365},
                        width: "auto",

                        objectFit: "cover",
                    }}
                />}
              
            </Stack>

            <Stack paddingX={{xs:2.5,sm:10}}>
                <Typography variant="h6" mt={4} fontSize={{xs:15,sm:20,md:21,lg:22}}>
                    Healthcare practices across the country continue to find out
                    that convenience is one of the major areas that patients
                    give importance to while choosing a healthcare facility.
                    Online appointment scheduling has become, particularly,
                    something that more and more people consider when selecting
                    a doctor these days. If you are in the healthcare industry,
                    to be successful in today’s technology-driven world where
                    the use of smartphones, tablets and other internet-connected
                    devices is increasing exponentially, you have to provide
                    convenience to the patients besides delivering excellent
                    care.
                </Typography>
                <Typography variant="h5" marginY={2}>
                    Instructions
                </Typography>
                <Typography>
                    1. You need to present all your certificates including
                    liscence. Our team will evaluate your application and
                    approve it.
                </Typography>
                <Typography>
                    2.Once your account is approved,you can allow slots for the
                    upcoming days
                </Typography>
                <Typography>
                    3. You can manage bookings and time slots through the 'my
                    account'
                </Typography>
                <Typography>
                    4. You need to pay 10% of every booking to PurePulse once in
                    a month
                </Typography>
                <Typography>
                    5. You account will be suspended if you are not making the
                    payment at the right time
                </Typography>
                <Typography>
                    6. You can report any complaints or feedback to PurePulse at
                    any time.
                </Typography>
            </Stack>
            <Box display="flex" justifyContent="flex-end">
                <Button
                    variant="contained"
                    sx={{
                        marginRight: 13,
                        fontWeight: 700,
                        bgcolor: "primary.main",
                        color: "warning.main",
                        marginTop: 10,
                    }}
                    href="/doctor-form"
                >
                    Join with us
                </Button>
            </Box>
           
        </>
    );
};

export default Instructions;
