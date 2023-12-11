import { createSlice } from "@reduxjs/toolkit";
import { todoState } from "../../interfase";

const initialState: todoState = {
  todos: [],
};

export const todoReduser = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    toggleTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, isChecked: !todo.isChecked } : todo
      );
    },
    editTodo: (state, { payload }) => {
      console.log(payload);
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } =
  todoReduser.actions;
