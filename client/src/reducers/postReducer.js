import {
  ADD_POST,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST
} from "../actions/types";

const initialState = {
  posts: [], //array
  post: {}, //object
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        //delete post right from state with redux (for faster response with UI)
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}
