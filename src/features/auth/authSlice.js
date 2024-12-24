import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authService";
import { toast } from "react-toastify";

const userExist = JSON.parse(localStorage.getItem("user"));

const authslice = createSlice({
    name: 'auth',
    initialState: {
        user : userExist || null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
},
reducers : {},
extraReducers : (builder) => {

    builder
    .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
    })
    .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.user = action.payload
    })
    .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload;
    })
    .addCase(logOutUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = "";
        state.user = null;
    })
    .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
    })
    .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.user = action.payload
    })
    .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload;
    })
}})

export default authslice.reducer;

// REGISTER USER

export const registerUser = createAsyncThunk(
    "AUTH/REGISTER", 
    async(formData, thunkAPI) => {
    // console.log(formData);

    try {
        return await register(formData);
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
        
    }
    
})

//LOGOUT USER

export const logOutUser = createAsyncThunk("AUTH/LOGOUT", async()=> {
   window.alert("Are you want to logout?",  localStorage.removeItem("user"));
})



// REGISTER USER

export const loginUser = createAsyncThunk(
    "AUTH/LOGIN", 
    async(formData, thunkAPI) => {
    // console.log(formData);

    try {
        return await login(formData);
        // console.log(formData)
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
        
    }
    
})