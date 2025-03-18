import { useGetUserTeamsQuery } from "../api/userTeamsApi";

export const useUserTeams = () => {
  const { data, isLoading, isError, error } = useGetUserTeamsQuery();

  return {
    userTeams: data?.teams || [],
    isLoading,
    isError,
    error,
  };
};
