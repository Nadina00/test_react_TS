import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./Reducers/data/data-slice";
import TodoReducer from "./Reducers/todo/todo-slice";


export const store = configureStore({
  reducer: {
   data: DataReducer,
    todo: TodoReducer,
  },
});
