import { useGetUserCreatedTeamsQuery } from "../api/userCreatedTeamsApi";

export const useUserCreatedTeams = () => {
  const { data, isLoading, isError, error } = useGetUserCreatedTeamsQuery({});

  return {
    createdTeams: data?.teams || [],
    isLoading,
    isError,
    error,
  };
};
