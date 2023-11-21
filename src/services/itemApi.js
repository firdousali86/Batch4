import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  endpoints: builder => ({
    getAllItems: builder.query({
      query: () => 'items',
    }),
    postItem: builder.mutation({
      query: newItem => ({
        url: 'items',
        method: 'POST',
        body: {
          title: newItem.title,
          image: newItem.image,
          details: newItem.details,
        },
        headers: {'X-Access-Token': newItem.accessToken},
      }),
    }),
  }),
});

export const {useGetAllItemsQuery, usePostItemMutation} = itemApi;
