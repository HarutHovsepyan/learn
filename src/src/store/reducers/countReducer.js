import { CountTypes } from '../types';

const initState = 8;

export default function countReducer(state = initState, action) {
  console.log(state,action);
  switch (action.type) {
    case CountTypes.PLUS:
      return state + action.count;
    case CountTypes.MINUS:
      return state - action.count;

    default:
      return state
  }
  
}