/* eslint-disable no-unused-vars */
import apiSlice from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all tasks
    getTasks: builder.query({
      query: () => `/tasks`,
    }),

    // add task
    addTasks: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetTasksQuery, useAddTasksMutation } = taskApi;
