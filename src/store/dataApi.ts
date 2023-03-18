import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import type { Pokemon } from '../types';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['pokemon'],
  endpoints: (builder) => ({
    search: builder.query<Pokemon[], string>({
      query: (name) => `search?name=${name}`,
      providesTags: (result = [], error, search) => [{ type: 'pokemon', search }],
    })
  })
})