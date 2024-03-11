import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customHeader } from "./config";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery(customHeader()),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
