import {createSlice} from '@reduxjs/toolkit'

const initialState={
      doctorData:[],
    
}

const doctorRegisteration=createSlice({
    name:'doctors',
    initialState,
    reducers:{
        updateDoctorData:(state,action)=>{
            state.doctorData=action.payload
           
        }
    }
})

export const {updateDoctorData}=doctorRegisteration.actions
export default doctorRegisteration.reducer