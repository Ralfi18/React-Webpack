import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  posts: []
};
function postReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};
export default postReducer;
