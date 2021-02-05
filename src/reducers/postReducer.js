import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LOADING,
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loader: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((postItem) =>
          postItem.id === payload.id ? payload : postItem
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id !== payload),
      };
    case LOADING:
      return {
        ...state,
        loader: !state.loader,
      };
    default:
      return state;
  }
};
