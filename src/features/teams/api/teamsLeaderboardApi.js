import { apiSlice } from "../../../services/apiSlice";

export const teamsLeaderboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeamsLeaderboard: builder.query({
      query: () => "/teams/leaderboard",
      providesTags: ["Teams", { type: "Teams", id: "LEADERBOARD" }],
    }),
  }),
});

export const { useGetTeamsLeaderboardQuery } = teamsLeaderboardApi;
