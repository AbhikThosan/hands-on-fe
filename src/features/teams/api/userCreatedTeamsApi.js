import { apiSlice } from "../../../services/apiSlice";

export const userCreatedTeamsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserCreatedTeams: builder.query({
      query: ({ is_private } = {}) => ({
        url: "/teams/created",
        params: { ...(is_private !== undefined && { is_private }) },
      }),
      providesTags: ["Teams", { type: "Teams", id: "USER_CREATED" }],
    }),
  }),
});

export const { useGetUserCreatedTeamsQuery } = userCreatedTeamsApi;
