import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './Todo.slice'
import favReducer from './Fav.slice'


export const store = configureStore({
    reducer: {
        todo: todoReducer,
        favorites: favReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch