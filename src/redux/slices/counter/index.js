import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState: 0,
    reducers:{
        increase: (state)=>state + 1,
        decrement: (state)=>state-1,
    }
})

export const {increase,decrement} = counterSlice.actions
export default counterSlice.reducer