import axios from "axios";
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LOADING,
  HANDLE_ERROR,
} from "./types";

const baseAPIURL = "https://jsonplaceholder.typicode.com";

// Set Loader
export const setLoader = (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

// Get all posts
export const getPosts = () => async (dispatch) => {
  setLoader(dispatch);
  setError(dispatch, null);
  const result = await axios.get(`${baseAPIURL}/posts`);
  dispatch({
    type: GET_POSTS,
    payload: result.data,
  });
  setLoader(dispatch);
};

// Get a post
export const getPost = (id) => async (dispatch) => {
  setLoader(dispatch);
  const result = await axios.get(`${baseAPIURL}/posts/${id}`);
  dispatch({
    type: GET_POST,
    payload: result.data,
  });
  setLoader(dispatch);
};

// Create a post
export const createPost = (post) => async (dispatch) => {
  setLoader(dispatch);
  setError(dispatch, null);
  await axios
    .post(`${baseAPIURL}/posts`, post)
    .then((response) => {
      dispatch({
        type: CREATE_POST,
        payload: response.data,
      });
      setLoader(dispatch);
    })
    .catch((error) => {
      setError(dispatch, error);
      setLoader(dispatch);
    });
};

// Update a post
export const updatePost = (post) => async (dispatch) => {
  setLoader(dispatch);
  setError(dispatch, null);
  await axios
    .put(`${baseAPIURL}/posts/${post.id}`, post)
    .then((response) => {
      dispatch({
        type: UPDATE_POST,
        payload: response.data,
      });
      setLoader(dispatch);
    })
    .catch((error) => {
      setError(dispatch, error);
      setLoader(dispatch);
    });
};

// Delete a post
export const deletePost = (postId) => async (dispatch) => {
  setLoader(dispatch);
  await axios.delete(`${baseAPIURL}/posts/${postId}`);
  dispatch({
    type: DELETE_POST,
    payload: postId,
  });
  setLoader(dispatch);
};

export const setError = (dispatch, error) => {
  dispatch({
    type: HANDLE_ERROR,
    payload: error,
  });
};
