import React from "react";
import AboutImage from "../../assets/About.jpg";
import { Box, Stack, Typography } from "@mui/material";
const AboutComponent = () => {
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
            <Stack direction="row" bgcolor="warning.main" marginX={10}>
                <Typography
                    sx={{ padding: 14 }}
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
                <Box
                    component="img"
                    src={AboutImage}
                    alt="About-image"
                    height="auto"
                    maxWidth="80%"
                />
            </Stack>
        </>
    );
};

export default AboutComponent;
