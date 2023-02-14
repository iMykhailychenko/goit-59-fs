import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'rtk-posts',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://70.34.201.18:4444' }),

  endpoints: builder => ({
    getPosts: builder.query({
      query: params => ({
        url: '/posts',
        params,
      }),

      providesTags: ({ data }) => {
        if (data) {
          return [
            ...data.map(({ id }) => ({ type: 'Posts', id })),
            { type: 'Posts', id: 'LIST' },
          ];
        }

        return [{ type: 'Posts', id: 'LIST' }];
      },
    }),

    deletePosts: builder.mutation({
      query: id => ({
        url: '/posts/' + id,
        method: 'DELETE',
      }),

      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useDeletePostsMutation,
} = postsApi;
