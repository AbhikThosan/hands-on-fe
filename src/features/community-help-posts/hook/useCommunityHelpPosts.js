import { useGetCommunityHelpPostsQuery } from "../api/communityHelpPostsApi";

export const useCommunityHelpPosts = ({
  page = 1,
  limit = 10,
  category = "",
  location = "",
  urgency_level = "",
  status = "",
  all = false,
} = {}) => {
  const {
    data: helpData,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetCommunityHelpPostsQuery({
    page,
    limit,
    category: category || undefined,
    location: location || undefined,
    urgency_level: urgency_level || undefined,
    status: status || undefined,
    all,
  });

  const helpRequests = helpData?.help_requests || [];
  const pagination = helpData?.pagination || {
    total_items: 0,
    total_pages: 1,
    current_page: 1,
    items_per_page: limit,
    has_next: false,
    has_previous: false,
  };

  return {
    helpRequests,
    pagination,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
};
