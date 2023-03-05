import {createSlice} from '@reduxjs/toolkit'

const initialState={
      doctorData:[],
      finalData:[]
}

const doctorRegisteration=createSlice({
    name:'doctors',
    initialState,
    reducers:{
        updateDoctorData:(state,action)=>{
            state.doctorData=action.payload
           
        },
        updateFinalData:(state,action)=>{
            state.finalData=action.payload
        }
    }
})

export const {updateDoctorData,updateFinalData}=doctorRegisteration.actions
export default doctorRegisteration.reducer