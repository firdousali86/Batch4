import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  endpoints: builder => ({
    getAllItems: builder.query({
      query: () => 'items',
    }),
    postItem: builder.mutation({
      query: ({accessToken, ...rest}) => ({
        url: 'items',
        method: 'POST',
        body: rest,
        headers: {'X-Access-Token': accessToken},
      }),
    }),
  }),
});

export const {useGetAllItemsQuery, usePostItemMutation} = itemApi;
