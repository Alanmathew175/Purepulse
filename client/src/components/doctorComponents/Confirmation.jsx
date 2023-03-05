import React from "react";
import { Stack, Typography } from "@mui/material";


const Confirmation = (props) => {
   
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
                  
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "warning.main",
                        padding: 4,
                        marginTop: 2,
                        marginX:{xs:6,sm:12,lg:25}
                    }}
                >
                    <Typography >
                        By submitting this form, I confirm that all of the
                        information provided is true and accurate to the best of
                        my knowledge. I understand that any false or misleading
                        information may result in the rejection of my
                        application
                    </Typography>
                    {props.error&&
                    <Typography variant="body2" color='error'>{props.error}</Typography>}
                </Stack>
            </Stack>
        </>
    );
};

export default Confirmation;
