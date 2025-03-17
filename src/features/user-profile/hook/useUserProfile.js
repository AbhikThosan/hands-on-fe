import { useGetProfileQuery } from "../api/userProfileApi";

export const useUserProfile = () => {
  const {
    data: profileData,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetProfileQuery();

  const profile = profileData || {
    id: null,
    name: "",
    email: "",
    skills: [],
    causes_supported: [],
    volunteer_hours: 0,
    volunteer_history: [],
    total_contributions: {},
    created_at: "",
  };

  return {
    profile,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
};
