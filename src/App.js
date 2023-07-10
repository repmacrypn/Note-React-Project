import React, { useState } from 'react'
import { useLazyGetPostQuery, useGetPostsQuery, useAddNewPostMutation } from './redux/apiSlice';
import { nanoid } from '@reduxjs/toolkit';

function App() {
  return (
    <div className='mainPage'>
      <SinglePost />
      <PostAdder />
      <PostsList />
    </div>
  );
}

const PostsList = () => {
  const {
    data: posts = [],
    isLoading,
  } = useGetPostsQuery()

  const result = posts.map(post => {
    return <Post
      post={post}
      key={post.id}
    />
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {result}
    </div>
  )
}

const PostAdder = () => {
  const [addNewPost, { data: newPost }] = useAddNewPostMutation()

  const addNewPostOnClick = () => {
    addNewPost({
      "userId": 4,
      "id": nanoid(),
      "title": "qq rad vsex videt'",
      "body": "ararat",
    })
  }

  return (
    <div>
      <div>{newPost?.title}</div>
      <button onClick={addNewPostOnClick}>Add new post</button>
    </div>
  )
}

const SinglePost = () => {
  const [value, setValue] = useState(1)

  const [getPost,
    { data: post,
      isFetching,
    }] = useLazyGetPostQuery()

  const handleGetPostClick = async () => {
    setValue(value => value += 1)
    await getPost(value)
  }

  if (isFetching) return <div>Fethcing...</div>

  return (
    <div>
      <button onClick={handleGetPostClick}>
        Get user by id:{value}
      </button>
      {post?.title}
    </div>
  )
}

const Post = ({ post }) => {
  return (
    <div>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <br></br>
    </div>
  )
}

export default App;
