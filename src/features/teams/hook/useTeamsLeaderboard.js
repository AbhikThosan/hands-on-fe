import { useGetTeamsLeaderboardQuery } from "../api/teamsLeaderboardApi";

export const useTeamsLeaderboard = () => {
  const { data, isLoading, isError, error } = useGetTeamsLeaderboardQuery();

  return {
    leaderboard: data?.leaderboard || [],
    isLoading,
    isError,
    error,
  };
};
