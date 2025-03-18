import apiSlice from "../../../services/apiSlice";

export const publicTeamsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicTeams: builder.query({
      query: ({ page = 1, limit = 10, sort_by, search, all } = {}) => ({
        url: "/teams",
        params: {
          page,
          limit,
          ...(sort_by && { sort_by }),
          ...(search && { search }),
          ...(all !== undefined && { all }),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.teams.map(({ id }) => ({ type: "Teams", id })),
              { type: "Teams", id: "PUBLIC_LIST" },
            ]
          : [{ type: "Teams", id: "PUBLIC_LIST" }],
    }),
  }),
});

export const { useGetPublicTeamsQuery } = publicTeamsApi;
