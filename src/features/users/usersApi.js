/* eslint-disable no-unused-vars */
import apiSlice from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get user
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),

    // get user by email
    getUserByEmail: builder.query({
      query: (email) => `/user-by-email?email=${email}`,
    }),

    // edit user
    editUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        try {
          const { data: res } = await queryFulfilled;
          if (res) {
            console.log(res);
            dispatch(
              apiSlice.util.updateQueryData("getUser", id, (draft) => {
                Object.assign(draft, { user: res.user });
              })
            );
          }
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const { useGetUserQuery, useGetUserByEmailQuery, useEditUserMutation } =
  usersApi;
