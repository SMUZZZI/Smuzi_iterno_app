import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../actions/axios'

export const fetchProject = createAsyncThunk("project/fetchProject", async () => {
    const { data } = await axios.get("/api/project")
    return data
})

export const fetchProjectParam = createAsyncThunk("project/fetchProject", async (param) => {
    const { data } = await axios.get(`/api/project/${param}`)
    return data
})
export const fetchProjectLimit = createAsyncThunk("project/fetchProjectLimit", async (param) => {
    const { data } = await axios.get(`/api/project/${param.id}/8/${param.page}`)
    return data
})
export const fetchDeleteProject = createAsyncThunk("project/fetchDeleteProject", async (id) => {
    await axios.delete(`/api/project/${id}`)
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
        // Получение проектов
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
        // Создание проекта
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
        // Удаление проекта
        [fetchDeleteProject.pending]: (state, action) => {
            state.items = state.items.filter(obj => obj._id === action.meta.arg)
        },
    },
})
const projectLimitSlice = createSlice({
    name: "projectLimit",
    initialState,
    reducers: {},
    extraReducers: {
        // Получение проектов
        [fetchProjectLimit.pending]: (state) => {
            state.status = "loading";
            state.items = [];
        },
        [fetchProjectLimit.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.items = action.payload;
        },
        [fetchProjectLimit.rejected]: (state) => {
            state.status = "error";
            state.items = [];
        },
    },
})

export const projectReducer = projectSlice.reducer; 
export const projectLimitReducer = projectLimitSlice.reducer; 