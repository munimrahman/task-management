/* eslint-disable no-unused-vars */
import apiSlice from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all teams
    getTeams: builder.query({
      query: () => `/teams`,
    }),

    // get single team
    getTeam: builder.query({
      query: (id) => `/teams/${id}`,
    }),

    // edit team
    editTeams: builder.mutation({
      query: ({ id, data, cacheData, teamId }) => ({
        url: `/teams/${id}`,
        method: "PUT",
        body: data,
      }),

      // async onQueryStarted(
      //   { id, data, cacheData },
      //   { queryFulfilled, dispatch }
      // ) {
      //   // const patchResult = dispatch(
      //   //   apiSlice.util.updateQueryData("getTeams", undefined, (draftTeams) => {
      //   //     // const updatedIndex = draftTeams.teams.findIndex((team) => {
      //   //     //   return team?._id == data?.team?._id;
      //   //     // });
      //   //     // draftTeams.teams[updatedIndex] = data?.team;
      //   //     const findTeam = draftTeams.teams.find((team) => {
      //   //       return team._id === id;
      //   //     });
      //   //     findTeam.teamMembers.push({ ...cacheData, _id: Date.now() });
      //   //   })
      //   // );
      //   try {
      //     const { data: res } = await queryFulfilled;
      //     if (res) {
      //       dispatch(
      //         apiSlice.util.updateQueryData(
      //           "getTeams",
      //           undefined,
      //           (draftTeams) => {
      //             const updatedIndex = draftTeams.teams.findIndex((team) => {
      //               return team?._id == data?.team?._id;
      //             });
      //             draftTeams.teams[updatedIndex] = data?.team;
      //           }
      //         )
      //       );
      //     }
      //   } catch (error) {
      //     //
      //   }
      // },
    }),
  }),
});

export const { useGetTeamsQuery, useGetTeamQuery, useEditTeamsMutation } =
  usersApi;
