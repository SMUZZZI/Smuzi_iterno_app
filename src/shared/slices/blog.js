import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../actions/axios'

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async () => {
    const { data } = await axios.get("/api/blog")
    return data
})
export const fetchBlogLimit = createAsyncThunk("blog/fetchBlogLimit", async (param) => {
    const { data } = await axios.get(`/api/blog/${param.limit}/${param.page}`)
    return data
})
export const fetchDeleteBlog = createAsyncThunk("project/fetchDeleteBlog", async (id) => {
    await axios.delete(`/api/blog/${id}`)
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
        // Получение блога
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
        // Создание блога
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
        // Удаление блога
        [fetchDeleteBlog.pending]: (state, action) => {
            state.items = state.items.filter(obj => obj._id === action.meta.arg)
        },
    },
})
const blogSliceLimit = createSlice({
    name: "blogLimit",
    initialState,
    reducers: {},
    extraReducers: {
        // Получение блога
        [fetchBlogLimit.pending]: (state) => {
            state.status = "loading";
            state.items = [];
        },
        [fetchBlogLimit.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.items = action.payload;
        },
        [fetchBlogLimit.rejected]: (state) => {
            state.status = "error";
            state.items = [];
        },
    },
})

export const blogReducer = blogSlice.reducer; 
export const blogLimitReducer = blogSliceLimit.reducer; 