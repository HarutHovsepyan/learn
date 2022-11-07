import { PostsTypes } from '../types';

export const editAction = (isEdit,id) => {
  return {
    type: PostsTypes.EDIT,
    payload: {
      isEdit,
      id
    }
  }
};

export const selectAction = (id) => {
  return {
    type: PostsTypes.SELECT,
    payload:id
  }
}

export const setAction = (posts) => {
  return {
    type: PostsTypes.SET,
    payload:posts
  }
}
