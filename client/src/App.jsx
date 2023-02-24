import React from "react";
import './'
import AdminRoutes from "./routes/adminRoutes/AdminRoutes";
import DoctorRoutes from "./routes/doctorRoutes/DoctorRoutes";
import UserRoutes from "./routes/userRoutes/UserRoutes";
import { createTheme ,ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from  '@mui/material';

const theme = createTheme({
    palette:{
      secondary:{
        main:'#301E67'
      },
      primary:{
        main:'#537FE7'
      },
      warning:{
        main:'#C0EEF2'
      },
      info:{
        main:'#D9D9D9'
      }
    }
  })

function App() {
    return <div className="App">
         <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AdminRoutes/>
            <DoctorRoutes/>
            <UserRoutes/>
        </ThemeProvider>
            
           </div>;
}

export default App;
