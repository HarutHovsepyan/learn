import { useCallback, useEffect, useState } from 'react';
import useHook from './hook';

export default function Posts() {
  const {
    inputBlurHandler,
    inputChangeHandler,
    clickEditHandler,
    clickHandler,
    posts
  } = useHook()

  return (<div>
    Posts
    {posts.map((post,index) => {
      return (
        <div key={"post_item_n" + index} onClick={clickHandler(post.id)} className={`card ${post.selected?"selected":""}`}>
          <div className='card-header' >
            {post.edited ? <input onBlur={inputBlurHandler(post.id)} value={post.title} onChange={inputChangeHandler(post.id)} />:<p onClick={clickEditHandler(post.id)} >{post.title}</p>}
          </div>
          <div className='card-body'>
            { post.body}
          </div>
        </div>
      );
    })}
  </div>)
}