import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authHeader } from "./authHeader";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(authHeader()),
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
