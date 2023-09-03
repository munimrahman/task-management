/* eslint-disable no-unused-vars */
import apiSlice from "../api/apiSlice";

export const teamsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all teams
    getTeams: builder.query({
      query: () => `/teams`,
    }),

    // get single team
    getTeam: builder.query({
      query: (id) => `/teams/${id}`,
    }),

    // add team
    addTeam: builder.mutation({
      query: (data) => ({
        url: "/teams",
        method: "POST",
        body: data,
      }),
    }),

    // edit team
    editTeams: builder.mutation({
      query: ({ id, data, cacheData, teamId }) => ({
        url: `/teams/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetTeamsQuery,
  useGetTeamQuery,
  useAddTeamMutation,
  useEditTeamsMutation,
} = teamsApi;
