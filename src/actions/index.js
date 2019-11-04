import { ADD_POST, CLEAR_ALL } from "../constants/action-types";


export function addPost(payload) {
  return { type: ADD_POST, payload }
};

export function clearAllPosts(payload) {
  return { type: CLEAR_ALL, payload };
}
