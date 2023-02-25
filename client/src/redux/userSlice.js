import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE={
      UserDetails:'Login'
}

const userDetailsSlice=createSlice({
    name:'userDetails',
    initialState:INITIAL_STATE,
    reducers:{
        addUserDetails:(state,action)=>{
            state.UserDetails=action.payload
           
        }
    }
})

export const {addUserDetails}=userDetailsSlice.actions
export default userDetailsSlice.reducer