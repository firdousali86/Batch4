import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  endpoints: builder => ({
    getAllItems: builder.query({
      query: name => 'items',
    }),
  }),
});

export const {useGetAllItemsQuery} = itemApi;
