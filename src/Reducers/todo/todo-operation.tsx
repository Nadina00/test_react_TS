import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//const baseURL = "https://jsonplaceholder.typicode.com/todos?_limit=100";

const getTodo = createAsyncThunk("todo/get", async (page: number) => {
  try {
    console.log(page);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=${
        page * 10 - 10
      }&page=${page}`
    );
    const todoItem = data;
    console.log(todoItem);
    return todoItem;
  } catch (error) {
    console.error(error);
  }
});

const deletePost = createAsyncThunk("todo/delpost", async (id: number) => {
  try {
    return id;
  } catch (error) {
    console.error(error);
  }
});

const dataOperations = {
  getTodo,
  deletePost,
};

export default dataOperations;
