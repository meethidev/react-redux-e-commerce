import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        cartItems : [],
        quantity : 0,
        totalPrice : 0,
    },
    reducers : {
        addToCart : (state, action) => {

            const existProduct = state.cartItems.findIndex((val) => val.id === action.payload.id)

            if(existProduct == -1){
                state.cartItems.push({ ...action.payload, quantity : 1})
                state.totalPrice +=  Math.floor(action.payload.id)
            }else{
                state.cartItems[existProduct].quantity += 1
                state.totalPrice +=  Math.floor(action.payload.id)
            }

          
        },
        removeFromCart : (state, action) => {
            return {
                ...state,
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload)
            }
        },
    },
    extraReducers : (builder) => {

    }
})

export const { addToCart, removeFromCart, increaseCartItem, quantity, totalPrice } = cartSlice.actions;

export default cartSlice.reducer;