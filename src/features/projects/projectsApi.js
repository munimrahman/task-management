/* eslint-disable no-unused-vars */
import apiSlice from "../api/apiSlice";

export const projectsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all projects
    getProjects: builder.query({
      query: () => `/projects`,
    }),

    // get single project
    getProject: builder.query({
      query: (id) => `/projects/${id}`,
    }),

    // add project
    addProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
  useAddProjectMutation,
} = projectsApi;
