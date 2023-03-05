import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userReducer";
import doctorSlice from "./doctorSlice";
export const store=configureStore({
    reducer:{
        // users:userReducer,
        doctor:doctorSlice
    }
})