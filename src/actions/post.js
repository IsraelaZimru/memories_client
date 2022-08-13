import * as api from "../api";
import { CREATE, UPDATE, FETCH_ALL, DELETE } from "../constans/actionTypes";
//Action Creators - funtion that create actons add activate the reducer!!!
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (e) {
    console.log(e.message);
  }
};

export const updateLikes = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateLikes(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};
