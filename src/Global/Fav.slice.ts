import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleTodoDataType } from "./Todo.slice";

interface Istate {
    favorites?: SingleTodoDataType[]
}


const initialState:Istate = {
    favorites: []
}

const favSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addItem: (state,action:PayloadAction<SingleTodoDataType>) => {

            let localMemory:SingleTodoDataType[] = JSON.parse(localStorage.getItem("favlist"))

            if(localMemory === null) {
                const data = [...state.favorites,action.payload]
                localStorage.setItem("favlist",JSON.stringify(data))
                return {...state,favorites: data} 
            }

            let existedItem = localMemory.find(item => action.payload.id === item.id)
            if(existedItem === undefined){
                state.favorites.push(action.payload)
                localStorage.setItem("favlist",JSON.stringify(state.favorites))
            }
        },
        removeItem: (state,action:PayloadAction<SingleTodoDataType>) => {
            state.favorites = state.favorites.filter(item => action.payload.id !== item.id)
            localStorage.setItem("favlist",JSON.stringify(state.favorites))
        },
        showFavs: (state,action:PayloadAction<SingleTodoDataType>) => {
            let data = localStorage.getItem("favlist")
            data === null ? state.favorites = [] : state.favorites = JSON.parse(data) 
            
        }
    }
})

export const {addItem , showFavs , removeItem} = favSlice.actions

export default favSlice.reducer