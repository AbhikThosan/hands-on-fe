import { apiSlice } from "../../../services/apiSlice";

export const communityHelpPostsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommunityHelpPosts: builder.query({
      query: ({
        page = 1,
        limit = 10,
        category,
        location,
        urgency_level,
        status,
        all,
      } = {}) => ({
        url: "/community-help",
        params: {
          page,
          limit,
          ...(category && { category }),
          ...(location && { location }),
          ...(urgency_level && { urgency_level }),
          ...(status && { status }),
          ...(all !== undefined && { all }),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.help_requests.map(({ id }) => ({
                type: "CommunityHelp",
                id,
              })),
              { type: "CommunityHelp", id: "LIST" },
            ]
          : [{ type: "CommunityHelp", id: "LIST" }],
    }),
  }),
});

export const { useGetCommunityHelpPostsQuery } = communityHelpPostsApi;
