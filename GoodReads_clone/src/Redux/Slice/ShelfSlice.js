import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from 'Configs/axiosInstance';
import toast from "react-hot-toast";


const initialState = {
    shelfList : []
}

export const getAllShelfs = createAsyncThunk('getAllShelfs',async ()=>{
try {
    const response =  axiosInstance.get('bookshelves',{
        headers :{
            'x-access-token' : localStorage.getItem('token')
        }
    })
    console.log('shelf response',response);
    toast.promise(response,{
        loading: 'loading books data',
        success: 'Successfully loaded all the books',
        error: "Something went wrong"
    })
    return await response ;
} catch (error) {
    console.log(error);
}

}) 

const shelfSlice = createSlice({
    name : 'shelf',
    initialState,
    reducers : {} ,
    extraReducers : builder =>{
        builder.addCase(getAllShelfs.fulfilled,(state,action)=>{
            console.log('shelf builder', [state, action]);
            if (action?.payload?.data?.data) {
                state.shelfList = action?.payload?.data?.data;
            } 
        })
    }
})

export default shelfSlice.reducer;