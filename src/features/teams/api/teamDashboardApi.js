import { apiSlice } from "../../../services/apiSlice";

export const teamDashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeamDashboard: builder.query({
      query: (teamId) => `/teams/${teamId}/dashboard`,
      providesTags: (result, error, teamId) => [{ type: "Teams", id: teamId }],
    }),
  }),
});

export const { useGetTeamDashboardQuery } = teamDashboardApi;
