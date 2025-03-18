import { useGetPendingInvitationsQuery } from "../api/teamInvitationApi";

export const useTeamInvitations = () => {
  const { data, isLoading, isError, error } = useGetPendingInvitationsQuery();

  return {
    invitations: data?.invitations || [],
    isLoading,
    isError,
    error,
  };
};
