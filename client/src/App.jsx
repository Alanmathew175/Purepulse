import React from "react";
import AdminRoutes from "./routes/adminRoutes/AdminRoutes";
import DoctorRoutes from "./routes/doctorRoutes/DoctorRoutes";
import UserRoutes from "./routes/userRoutes/UserRoutes";
import theme from "./utility/CoustomTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css"

function App() {
    return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container id="mainRoot" >
                    <AdminRoutes />
                    <DoctorRoutes />
                    <UserRoutes />
                </Container>
            </ThemeProvider>
    );
}

export default App;
