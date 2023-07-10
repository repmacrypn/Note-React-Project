import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts'
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
        })
    }),
})

export const { useGetPostsQuery, useLazyGetPostQuery } = apiSlice