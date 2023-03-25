import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../actions/axios'

export const fetchProject = createAsyncThunk("blog/fetchProject", async () => {
    const { data } = await axios.get("/api/project")
    return data
})

export const fetchProjectParam = createAsyncThunk("blog/fetchProject", async (param) => {
    const { data } = await axios.get(`/api/project/${param}`)
    return data
})

const initialState = {
    items: [],
    status: "loading"
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProject.pending]: (state) => {
            state.status = "loading";
            state.items = [];
        },
        [fetchProject.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.items = action.payload;
        },
        [fetchProject.rejected]: (state) => {
            state.status = "error";
            state.items = [];
        },
    },
})

export const projectReducer = projectSlice.reducer; 