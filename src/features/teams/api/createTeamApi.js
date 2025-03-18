import { apiSlice } from "../../../services/apiSlice";

export const createTeamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTeam: builder.mutation({
      query: (teamData) => ({
        url: "/teams",
        method: "POST",
        body: teamData,
      }),
      invalidatesTags: [
        { type: "Teams", id: "PUBLIC_LIST" },
        { type: "Teams", id: "USER_CREATED" },
      ],
    }),
  }),
});

export const { useCreateTeamMutation } = createTeamApi;
