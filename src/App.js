import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectAllPosts, selectPostById } from './redux/postsSlice';

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const [value, setValue] = useState(1)
  const currentUser = useSelector(state => selectPostById(state, value))

  const result = posts.map(post => {
    return <Post
      post={post}
      key={post.id}
    />
  })

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div className='mainPage'>
      <button onClick={() => setValue(value => value += 1)}>
        Get user by id:{value}
      </button>
      {currentUser.title}
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
