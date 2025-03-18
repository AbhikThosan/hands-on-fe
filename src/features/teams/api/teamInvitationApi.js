import { apiSlice } from "../../../services/apiSlice";

export const teamInvitationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendTeamInvitation: builder.mutation({
      query: ({ teamId, user_email }) => ({
        url: `/teams/${teamId}/invite`,
        method: "POST",
        body: { user_email },
      }),
      invalidatesTags: ["Teams", { type: "Teams", id: "INVITATIONS" }],
    }),
    getPendingInvitations: builder.query({
      query: () => "/teams/invitations",
      providesTags: ["Teams", { type: "Teams", id: "INVITATIONS" }],
    }),
    respondToInvitation: builder.mutation({
      query: ({ invitationId, accept }) => ({
        url: `/teams/invitations/${invitationId}/respond`,
        method: "POST",
        body: { accept },
      }),
      invalidatesTags: [
        { type: "Teams", id: "INVITATIONS" },
        { type: "Teams", id: "USER_TEAMS" },
      ],
    }),
  }),
});

export const {
  useSendTeamInvitationMutation,
  useGetPendingInvitationsQuery,
  useRespondToInvitationMutation,
} = teamInvitationApi;
