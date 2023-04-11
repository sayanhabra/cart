import { View, Text } from 'react-native'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const CartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.push(action.payload); 
        
      },
      removeItem: (state,action) => {
        return state.filter((item,index)=> index !==action.payload)
      },
      
    },
  })


export const { addItem, removeItem } = CartSlicer.actions

export default CartSlicer.reducer