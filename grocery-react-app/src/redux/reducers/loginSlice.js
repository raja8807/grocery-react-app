import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name : 'login',

    initialState:{
        isLoggedIn : false
    },

    reducers:{
        login : (state)=>{
            state.isLoggedIn = true
        },

        logout:(state)=>{
            state.isLoggedIn = false
        }
    }
    
})

console.log(loginSlice);

export const {login , logout} = loginSlice.actions
export default loginSlice.reducer