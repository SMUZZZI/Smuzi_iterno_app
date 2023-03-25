import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../slices/auth'
import { blogReducer } from '../slices/blog'
import { projectReducer } from '../slices/project'

const store = configureStore({
    reducer: {
        blog: blogReducer,
        project: projectReducer,
        auth: authReducer,
    },
})


export default store