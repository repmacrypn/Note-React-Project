import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
            providesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
        }),
        addNewPost: builder.mutation({
            query: (body) => ({
                url: `posts`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
    }),
})

export const { useGetPostsQuery, useLazyGetPostQuery, useAddNewPostMutation } = apiSlice