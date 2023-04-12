import { createAction, createReducer } from '@reduxjs/toolkit'

export const paginationSet = createAction("pagination/set")
export const paginationInc = createAction("pagination/inc")
export const paginationDec = createAction("pagination/dec")

export const paginationReducer = createReducer(1, (builder) => {
    builder.addCase(paginationSet, (state, action) => state = Number(action.payload))
    builder.addCase(paginationInc, (state, action) => state + Number(action.payload))
    builder.addCase(paginationDec, (state, action) => state - Number(action.payload))
})