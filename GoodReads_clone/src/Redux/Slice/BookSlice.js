import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from 'Configs/axiosInstance';
import toast from "react-hot-toast";

const initialState = {
    bookList : []
}

export const getAllBooks = createAsyncThunk('course/getAllBooks',async()=>{
    try {
        /* const response =await axiosInstance.get('books');
        console.log('Response',response);

        toast.promise(response, {
            loading: 'Fetching books',
            success: 'Successfully fetched books!!!',
            error: "Something went wrong"
        }); */
        const response = axiosInstance.get("books");
        console.log('Response',response);

        toast.promise(response, {
            loading: 'loading books data',
            success: 'Successfully loaded all the books',
            error: "Something went wrong"
        });
        return await response;
        
    } catch (error) {
        console.log(error);
        
    }
})

const bookSlice = createSlice({
    name : 'books',
    initialState,
    reducers : {},

    extraReducers : builder =>{
        builder.addCase(getAllBooks.fulfilled,(state,action)=>{
            console.log('builder', [state, action]);

        })
    }
})

export default bookSlice.reducer;