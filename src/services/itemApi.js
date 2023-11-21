import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  tagTypes: ['Item'],
  endpoints: builder => ({
    getAllItems: builder.query({
      query: () => 'items',
      providesTags: ['Item'],
    }),
    postItem: builder.mutation({
      query: ({accessToken, ...rest}) => ({
        url: 'items',
        method: 'POST',
        body: rest,
        headers: {'X-Access-Token': accessToken},
      }),
      invalidatesTags: ['Item'],
    }),
  }),
});

export const {useGetAllItemsQuery, usePostItemMutation} = itemApi;
