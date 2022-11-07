import { PostsTypes } from '../types';

export default function postsReducer(state = [],action) {
  const { type, payload } = action;
  const tmp = [...state];

  switch (type) {
    case PostsTypes.SET:
      return payload
    
    case PostsTypes.SELECT:
      const index = tmp.findIndex((post) => {
        return post.id === payload;
      });
      tmp[index].selected = !tmp[index].selected;
      return tmp;
    
    case PostsTypes.EDIT:
      const {isEdit,id} = payload
      const editedIndex = tmp.findIndex((post) => {
        return post.id === id;
      });
      tmp[editedIndex].edited = isEdit;
      return tmp;
    default:
      break;
  }
  return state;
}