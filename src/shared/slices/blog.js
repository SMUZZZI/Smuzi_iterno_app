import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../actions/axios'

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async () => {
    const { data } = await axios.get("/api/blog")
    return data
})

const initialState = {
    items: [],
    status: "loading"
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBlog.pending]: (state) => {
            state.status = "loading";
            state.items = [];
        },
        [fetchBlog.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.items = action.payload;
        },
        [fetchBlog.rejected]: (state) => {
            state.status = "error";
            state.items = [];
        },
    },
})

export const blogReducer = blogSlice.reducer; 