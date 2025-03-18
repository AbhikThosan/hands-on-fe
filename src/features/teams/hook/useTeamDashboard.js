import { useGetTeamDashboardQuery } from "../api/teamDashboardApi";

export const useTeamDashboard = (teamId) => {
  const { data, isLoading, isError, error } = useGetTeamDashboardQuery(teamId, {
    skip: !teamId,
  });

  return {
    dashboard: data?.dashboard || null,
    isLoading,
    isError,
    error,
  };
};
