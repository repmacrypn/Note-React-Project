import React, { useState } from 'react'
import { useLazyGetPostQuery, useGetPostsQuery } from './redux/apiSlice';

function App() {
  const [value, setValue] = useState(1)

  const handleGetPostClick = async () => {
    setValue(value => value += 1)
    await getPost(value)
  }

  const {
    data: posts = [],
    isLoading,
  } = useGetPostsQuery()

  const [getPost,
    { data: post,
      isFetching,
    }] = useLazyGetPostQuery()

  const result = posts.map(post => {
    return <Post
      post={post}
      key={post.id}
    />
  })
  console.log('qqepte')

  if (isLoading) return <div>Loading...</div>
  if (isFetching) return <div>Fethcing...</div>


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
