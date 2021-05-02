import { createAsyncThunk , createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SingleTodoDataType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface Istate {
    todos: SingleTodoDataType[];
    status: null | string
}

const initialState:Istate = {
    todos: [],
    status: null
}

export const getTodosAsync = createAsyncThunk('users/getUsersAsync', async (sorted:string | undefined) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    let result:SingleTodoDataType[] = await res.json()
    if(sorted === `completed`){
        result = result.filter(item => item.completed === true)
    } else if (sorted === `uncompleted`){
        result = result.filter(item => item.completed !== true)
    } 
    return result
})

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changeCompleted: (state,action:PayloadAction<number>) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodosAsync.pending, (state, { payload }) => {
            state.status = 'loading'
        })
        builder.addCase(getTodosAsync.fulfilled, (state, action:PayloadAction<SingleTodoDataType[]>) => {
            return {
                todos : action.payload,
                status : 'success'
            }
        })
        builder.addCase(getTodosAsync.rejected, (state, { payload }) => {
            state.status = 'fail'
        })
    },
})

export const {changeCompleted } = todoSlice.actions

export default todoSlice.reducer