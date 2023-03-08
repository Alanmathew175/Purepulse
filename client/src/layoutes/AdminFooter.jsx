import React from 'react'
import { Stack,Typography } from '@mui/material'
const AdminFooter = () => {
  return (
    <>
       <Stack 
                sx={{
                    bgcolor: "#301E67",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pb: 3,
                }}
            >
                <Typography variant="body1" color="warning.main" paddingTop={2}>
                    {"Copyright © "}
                    PurePulse {new Date().getFullYear()}
                </Typography>
            </Stack>
    </>
  )
}

export default AdminFooter
