import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { postsAPI } from '../api/api'

const postsAdapter = createEntityAdapter()

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState({ status: 'idle' }),
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'suceeded'
                postsAdapter.setMany(state, action.payload)
            })
    },
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const data = await postsAPI.fetchPosts()
    return data
})

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
    selectEntities: selectPostEntities,
    selectTotal: selectPostsTotal,
} = postsAdapter.getSelectors(state => state.posts)

export default postsSlice.reducer