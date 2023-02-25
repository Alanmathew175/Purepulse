import React from "react";
import "./";
import AdminRoutes from "./routes/adminRoutes/AdminRoutes";
import DoctorRoutes from "./routes/doctorRoutes/DoctorRoutes";
import UserRoutes from "./routes/userRoutes/UserRoutes";
import theme from "./utility/CoustomTheme";
import {ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";



function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AdminRoutes />
                <DoctorRoutes />
                <UserRoutes />
            </ThemeProvider>
        </div>
    );
}

export default App;
