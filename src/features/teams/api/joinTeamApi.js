import { apiSlice } from "../../../services/apiSlice";

export const joinTeamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    joinTeam: builder.mutation({
      query: (teamId) => ({
        url: `/teams/${teamId}/join`,
        method: "POST",
      }),
      invalidatesTags: (result, error, teamId) => [
        { type: "Teams", id: teamId },
        { type: "Teams", id: "USER_TEAMS" },
      ],
    }),
  }),
});

export const { useJoinTeamMutation } = joinTeamApi;
