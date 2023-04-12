import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../actions/axios'

export const fetchTeam = createAsyncThunk("project/fetchTeam", async () => {
    const { data } = await axios.get("/api/team")
    return data
})
export const fetchDeleteTeam = createAsyncThunk("project/fetchDeleteProject", async (id) => {
    await axios.delete(`/api/team/${id}`)
})

const initialState = {
    items: [],
    status: "loading"
}

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {},
    extraReducers: {
        // Получение 
        [fetchTeam.pending]: (state) => {
            state.status = "loading";
            state.items = [];
        },
        [fetchTeam.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.items = action.payload;
        },
        [fetchTeam.rejected]: (state) => {
            state.status = "error";
            state.items = [];
        },
        // Создание 
        [fetchTeam.pending]: (state) => {
            state.status = "loading";
            state.items = [];
        },
        [fetchTeam.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.items = action.payload;
        },
        [fetchTeam.rejected]: (state) => {
            state.status = "error";
            state.items = [];
        },
        // Удаление 
        [fetchDeleteTeam.pending]: (state, action) => {
            state.items = state.items.filter(obj => obj._id === action.meta.arg)
        },
    },
})

export const teamReducer = teamSlice.reducer; 