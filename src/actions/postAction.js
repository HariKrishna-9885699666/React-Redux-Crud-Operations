import axios from "axios";
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LOADING,
} from "./types";

// Get all posts
export const getPosts = () => async (dispatch) => {
  setLoader(dispatch);
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: GET_POSTS,
    payload: result.data,
  });
  setLoader(dispatch);
};

// Get a post
export const getPost = (id) => async (dispatch) => {
  setLoader(dispatch);
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  dispatch({
    type: GET_POST,
    payload: result.data,
  });
  setLoader(dispatch);
};

// Create a post
export const createPost = (post) => async (dispatch) => {
  setLoader(dispatch);
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  dispatch({
    type: CREATE_POST,
    payload: result.data,
  });
  setLoader(dispatch);
};

// Update a post
export const updatePost = (post) => async (dispatch) => {
  setLoader(dispatch);
  const result = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    post
  );
  dispatch({
    type: UPDATE_POST,
    payload: result.data,
  });
  setLoader(dispatch);
};

// Delete a post
export const deletePost = (postId) => async (dispatch) => {
  setLoader(dispatch);
  const result = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  dispatch({
    type: DELETE_POST,
    payload: postId,
  });
  setLoader(dispatch);
};

// Set Loader
export const setLoader = (dispatch) => {
  dispatch({
    type: LOADING,
  });
};
