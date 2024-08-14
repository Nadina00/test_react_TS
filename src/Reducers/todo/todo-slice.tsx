import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import todoOperations from "./todo-operation";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoState = {
  todo: Todo[];
};

const initialState: TodoState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      todoOperations.getTodo.fulfilled,
      (state, action: PayloadAction<Todo[]>) => {
        state.todo = action.payload;
      }
    );
    builder.addCase(
      todoOperations.deletePost.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.todo = state.todo.filter(({ id }) => id !== action.payload);
      }
    );
  },
});

//export const { getPost } = dataSlice.actions;
export default todoSlice.reducer;
