import React from "react";
import { Stack } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Purepulse from "../assets/Purepulse.png";
import { Box } from "@mui/system";
const Footer = () => {
    const isAboveLgScreen = useMediaQuery((theme) =>
        theme.breakpoints.up("lg")
    );
    return (
        <>
            <Stack
                sx={{
                    bgcolor: "#301E67",
                    padding: 3,
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: 6,
                }}
                direction={isAboveLgScreen ? "row" : "column"}
            >
                <Stack>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        About Us
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Blog
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Career
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Contact Us
                    </Typography>
                    {isAboveLgScreen && (
                        <Box
                            component="img"
                            src={Purepulse}
                            alt="Example"
                            sx={{
                                height: "auto",
                                width: { xs: 35, sm: 45, md: 55 },
                            }}
                        />
                    )}
                </Stack>
                {!isAboveLgScreen && (
                    <Divider color="#C0EEF2" sx={{ marginY: 1.5 }} />
                )}
                <Stack>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        For patients
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Search for doctors
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Consult a Doctor
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Book a Doctor
                    </Typography>
                </Stack>
                {!isAboveLgScreen &&
                     (
                    <Divider color="#C0EEF2" sx={{ marginY: 1.5 }} />
                )}
                <Stack>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        For doctors
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Consultation
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Health Feed
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Profile
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Practises
                    </Typography>
                </Stack>
                {!isAboveLgScreen && (
                    <Divider color="#C0EEF2" sx={{ marginY: 1.5 }} />
                )}
                <Stack>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        More
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Help
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Developers
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Privacy Policy
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Terms & Conditions
                    </Typography>
                </Stack>
                {!isAboveLgScreen &&
                    
                   (
                    <Divider color="#C0EEF2" sx={{ marginY: 1.5 }} />
                )}
                <Stack>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Social Medias
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Facebook
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        Twitter
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        LinkedIn
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="warning.main"
                    >
                        YouTube
                    </Typography>
                </Stack>
                {!isAboveLgScreen&&(
                    <Stack
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        direction="row"
                    >
                        <Box
                            component="img"
                            src={Purepulse}
                            alt="Example"
                            sx={{
                                height: "auto",
                                width: { xs: 35, sm: 45, md: 55 },
                                marginLeft: 3,
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="warning.main"
                            sx={{ mt: 1.3, marginLeft: 3 }}
                        >
                            {"Copyright © "}
                            PurePulse {new Date().getFullYear()}
                        </Typography>
                    </Stack>
                )
                    
              }
            </Stack>
            {isAboveLgScreen &&(
                <Stack
                    sx={{
                        bgcolor: "#301E67",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pb: 3,
                    }}
                >
                    <Typography variant="body2" color="warning.main">
                        {"Copyright © "}
                        PurePulse {new Date().getFullYear()}
                    </Typography>
                </Stack>
            )
                
            }
        </>
    );
};

export default Footer;
