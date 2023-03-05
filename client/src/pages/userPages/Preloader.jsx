import React, { lazy, Suspense } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const UserHome = lazy(() => import("./UserHome"));
const Preloader = () => {
    return (
        <>
            <Suspense
                fallback={
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '100vh',
                        backgroundColor: 'white', 
                        opacity: 0.8, 
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 9999
                      }}>
                        <CircularProgress 
                          color="secondary" 
                          size={80} 
                          thickness={4} 
                        />
                      </div>
                      
                }
            >
                <UserHome />
            </Suspense>
        </>
    );
};

export default Preloader;
