import { apiSlice } from "../../../services/apiSlice";

export const userTeamsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserTeams: builder.query({
      query: () => "/user/teams",
      providesTags: (result) =>
        result
          ? [
              ...result.teams.map(({ id }) => ({ type: "Teams", id })),
              { type: "Teams", id: "USER_TEAMS" },
            ]
          : [{ type: "Teams", id: "USER_TEAMS" }],
    }),
  }),
});

export const { useGetUserTeamsQuery } = userTeamsApi;
