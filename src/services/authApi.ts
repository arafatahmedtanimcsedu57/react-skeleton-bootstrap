import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customHeader } from "./config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(customHeader()),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
