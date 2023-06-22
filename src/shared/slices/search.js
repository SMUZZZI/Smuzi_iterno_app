import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'

export const searchSet = createAction("search/set")



export const searchReducer = createReducer([], (builder) => {
    builder.addCase(searchSet, (state, action) => state = action.payload)
})
