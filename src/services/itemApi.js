import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PersistanceHelper} from '../helpers';

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
      query: newItem => ({
        url: 'items',
        method: 'POST',
        body: newItem,
        headers: {'X-Access-Token': PersistanceHelper.accessToken},
      }),
      invalidatesTags: ['Item'],
    }),
  }),
});

export const {useGetAllItemsQuery, usePostItemMutation} = itemApi;
