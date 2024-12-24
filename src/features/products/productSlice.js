import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./productService";
import { fetchProduct } from "./productService";

const productSlice = createSlice({
    name: "product",
    initialState : {
        products :[],
        product: {},
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : "",
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
        .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.products = action.payload
            })
        .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                //state.message = action.payload;
            })
            .addCase(getProduct.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
        .addCase(getProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.product = action.payload
            })
        .addCase(getProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                //state.message = action.payload;
            })
    }
})

export default productSlice.reducer;


//GET PRODUCTS

export const getProducts = createAsyncThunk(
    "FETCH/PRODUCTS", 
    async() => {

    try {
        return await fetchProducts();
        // console.log(formData)
    } catch (error) {
        console.log(error);
        
        
    }
    
})

//GET SINGLE PRODUCTS

export const getProduct = createAsyncThunk(
    "FETCH/PRODUCT", 
    async(id) => {

    try {
        return await fetchProduct(id);
        // console.log(formData)
    } catch (error) {
        console.log(error);
        
        
    }
    
})