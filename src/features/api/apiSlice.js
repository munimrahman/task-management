/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-server-munimrahman.vercel.app/api/v1",
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default apiSlice;
