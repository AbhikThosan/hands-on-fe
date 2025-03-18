import { useGetPublicTeamsQuery } from "../api/publicTeamsApi";

export const usePublicTeams = ({
  page = 1,
  limit = 10,
  sort_by,
  search,
  all = false,
} = {}) => {
  const { data, isLoading, isFetching, isError, error } =
    useGetPublicTeamsQuery({
      page,
      limit,
      sort_by,
      search,
      all,
    });

  return {
    publicTeams: data?.teams || [],
    publicPagination: data?.pagination || {
      total_items: 0,
      total_pages: 1,
      current_page: 1,
      items_per_page: limit,
    },
    isLoading,
    isFetching,
    isError,
    error,
  };
};
