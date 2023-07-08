import React, { useState } from 'react'
import { useLazyGetPostQuery, useGetPostsQuery } from './redux/apiSlice';

function App() {
  const [value, setValue] = useState(1)

  const handleGetPostClick = () => {
    getPost(value)
    setValue(value => value += 1)
  }

  const {
    data: posts = [],
    isLoading,
  } = useGetPostsQuery()

  const [getPost,
    { data: post,
    }] = useLazyGetPostQuery()

  const result = posts.map(post => {
    return <Post
      post={post}
      key={post.id}
    />
  })

  if (isLoading) return <div>Loading...</div>

  console.log('qq')

  return (
    <div className='mainPage'>
      <button onClick={handleGetPostClick}>
        Get user by id:{value}
      </button>
      {post?.title}
      {result}
    </div>
  );
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
