import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dataOperations from "./data-operation";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


type PostState = {
  list: Post[];
};

const initialState: PostState = {
  list: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      dataOperations.getPost.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.list = action.payload;
      }
    );
    builder.addCase(
      dataOperations.deletePost.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.list = state.list.filter(({ id }) => id !== action.payload);
      }
    );
    builder.addCase(
      dataOperations.addPost.fulfilled,
      (state, action: PayloadAction<Post>) => {
        console.log(action)
        state.list.push(action.payload);
      }
    );
  },
});

//export const { getPost } = dataSlice.actions;
export default dataSlice.reducer;
