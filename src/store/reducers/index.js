import { combineReducers } from 'redux';
import countReducer from "./countReducer";
import postsReducer from './postsReducer';
const reducers = combineReducers({
  count: countReducer,
  posts:postsReducer
});

export default reducers;