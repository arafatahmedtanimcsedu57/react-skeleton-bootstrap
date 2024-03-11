import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customHeader } from "./config";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery(customHeader()),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "auth/profile",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
