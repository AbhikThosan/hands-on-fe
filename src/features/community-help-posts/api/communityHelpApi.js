import apiSlice from "../../../services/apiSlice";

export const communityHelpApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommunityHelpPost: builder.query({
      query: (id) => `/community-help/${id}`,
      providesTags: (result) => [{ type: "CommunityHelp", id: result?.id }],
    }),
    getCommunityHelpComments: builder.query({
      query: (id) => `/community-help/${id}/comments`,
      providesTags: (result) =>
        result?.comments
          ? [
              ...result.comments.map((comment) => ({
                type: "CommunityHelp",
                id: `${result.help_request_id}-comment-${comment.id}`,
              })),
              { type: "CommunityHelp", id: "COMMENTS" },
            ]
          : [{ type: "CommunityHelp", id: "COMMENTS" }],
    }),
    postCommunityHelpComment: builder.mutation({
      query: ({ id, commentData }) => ({
        url: `/community-help/${id}/comments`,
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "CommunityHelp", id: "COMMENTS" },
        { type: "CommunityHelp", id },
      ],
    }),
    updateCommunityHelpStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/community-help/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "CommunityHelp", id },
        { type: "CommunityHelp", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetCommunityHelpPostQuery,
  useGetCommunityHelpCommentsQuery,
  usePostCommunityHelpCommentMutation,
  useUpdateCommunityHelpStatusMutation,
} = communityHelpApi;
