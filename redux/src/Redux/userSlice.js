import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo:{
            name: "puneet",
            email: "john@gmail.com"
        },
        pending :false,
        error:false,
       
    },
    reducers: {
        // update: (state, action) => {
        //     state.name = action.payload.name;
        //     state.email = action.payload.email;
        // },
        // remove: (state) => (state = {}),
        // addHello: (state, action) => {
        //     state.name = "hello " + action.payload.name;
        // }

        // async functions 

        updateStart :(state)=>{
            state.pending = true; 
        },
        updateSucess:(state , action)=>{
            state.pending = false
            state.userInfo = action.payload;
            state.error = false
        },
        updateError : (state)=>{
            state.error= true
            state.error= false
        }
    }
});
export const { updateStart ,updateSucess,updateError} = userSlice.actions;
export default userSlice.reducer;