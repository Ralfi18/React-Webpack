import { combineReducers } from 'redux';
import postReducer from './post-reducer';

export const reducer = combineReducers({
  posts: postReducer
});
