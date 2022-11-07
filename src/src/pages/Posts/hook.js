import React,{ useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAction } from '../../store/actions';
import { PostSelector } from '../../store/selectors';

export default function useHook() {
  const dispatch = useDispatch();
  const posts = useSelector(PostSelector.posts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    return res.json()
  }).then((_posts) => {
    dispatch(PostsAction.setAction(_posts))
  })
  },[dispatch])
  
  const clickHandler = useCallback((id) => {
    return () => {
      dispatch(PostsAction.selectAction(id))  
    }
  }, [dispatch])
  const clickEditHandler = useCallback((id) => {
    return (event) => {
      event.stopPropagation()
      dispatch(PostsAction.editAction(true,id))
    //   const tmp = [...posts];
    //   tmp[index].edited = true;
    //  // setPosts(tmp)  
    }

  }, [dispatch])
  const inputChangeHandler = useCallback((index) => {
    return (event) => {
      event.stopPropagation()
      const tmp = [...posts];
      console.log(event.target.value,index);
      tmp[index].title =event.target.value;
      //setPosts(tmp)  
    }

  }, [posts])
const inputBlurHandler = useCallback((id) => {
    return () => {
      dispatch(PostsAction.editAction(false,id))
 
    }
}, [dispatch])
  
  return {
    inputBlurHandler,
    inputChangeHandler,
    clickEditHandler,
    clickHandler,
    posts
  };
}