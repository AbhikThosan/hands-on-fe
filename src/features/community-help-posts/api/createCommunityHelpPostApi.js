import { apiSlice } from "../../../services/apiSlice";

export const createCommunityHelpPostApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCommunityHelpPost: builder.mutation({
      query: (postData) => ({
        url: "/community-help",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: [{ type: "CommunityHelp", id: "LIST" }],
    }),
  }),
});

export const { useCreateCommunityHelpPostMutation } =
  createCommunityHelpPostApi;
