import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../actions/axios'

export const fetchAdmin = createAsyncThunk("auth/fetchAdminData", async (params) => {
    const { data } = await axios.post("/auth/login", params)
    return data
})

export const fetchAuthAdmin = createAsyncThunk("auth/fetchAuthAdminData", async () => {
    const { data } = await axios.get("/auth/me")
    return data
})

const initialState = {
    data: null,
    status: "loading",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers:{
        [fetchAdmin.pending]: (state) => {
            state.status = "loading";
            state.data = null;
        },
        [fetchAdmin.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
        },
        [fetchAdmin.rejected]: (state) => {
            state.status = "error";
            state.data = null;
        },
        [fetchAuthAdmin.pending]: (state) => {
            state.status = "loading";
            state.data = null;
        },
        [fetchAuthAdmin.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
        },
        [fetchAuthAdmin.rejected]: (state) => {
            state.status = "error";
            state.data = null;
        },
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer
 