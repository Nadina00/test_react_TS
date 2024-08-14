import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

const getPost = createAsyncThunk("data/post", async () => {
  try {
    const { data } = await axios.get(baseURL);
    const listItem = data;
    console.log(listItem)
    return listItem;
  } catch (error) {
    console.error(error);
  }
});

const deletePost = createAsyncThunk("data/delpost", async (postId: number) => {
    try {
      
      return postId;
    } catch (error) {
      console.error(error);
    }
  });

  type addText = {
    id: number;
    title: string,
    body: string
  }

  const addPost = createAsyncThunk("data/addpost", async ({id, title, body}: addText) => {
    try {
      
      return {id, title, body};
    } catch (error) {
      console.error(error);
    }
  });

const dataOperations = {
    getPost,
    deletePost,
    addPost
  };
  
  export default dataOperations;