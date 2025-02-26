import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action);
            console.log(state);
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            // console.log(action);
            let todo = state.todos.find(todo => todo.id === action.payload.id); 
            if (todo) {
                todo = { ...todo, ...action.payload }; 
                const updatedTodos = state.todos.map(t =>
                    t.id === todo.id ? { ...t, ...action.payload } : t
                );
                return {
                    ...state,
                    todos: updatedTodos,
                };
            } else {
                return state; 
            }
        }
        
    }
})

export const {addTodo,removeTodo, updateTodo}=todoSlice.actions

export default todoSlice.reducer