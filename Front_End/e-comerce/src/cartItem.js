import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[]
}
const cartItemSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state, action)=>{
            state.value.push(action.payload);
        },
        remove:(state, action)=>{
            state.value=state.value.filter((item)=>item._id !== action.payload);
        },  
        empty:(state)=>{
            state.value=[];
        }
    }
})

export const {add, remove, empty}=cartItemSlice.actions;
export default cartItemSlice.reducer;