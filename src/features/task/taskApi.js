/* eslint-disable no-unused-vars */
import apiSlice from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all tasks
    getTasks: builder.query({
      query: () => `/tasks`,
    }),

    // get single task
    getTask: builder.query({
      query: (id) => `/task/${id}`,
    }),

    // add task
    addTasks: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
    }),

    // edit task
    editTasks: builder.mutation({
      query: ({ data, id }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete task
    deleteTasks: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTasksQuery,
  useEditTasksMutation,
  useGetTaskQuery,
  useAddTasksMutation,
  useDeleteTasksMutation,
} = taskApi;
