import { useGetEventsQuery } from "../api/eventsApi";

export const useEvents = ({
  page = 1,
  limit = 10,
  category = "",
  location = "",
  date = "",
  all = false,
} = {}) => {
  const {
    data: eventsData,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetEventsQuery({
    page,
    limit,
    category: category || undefined,
    location: location || undefined,
    date: date || undefined,
    all,
  });

  const events = eventsData?.events || [];
  const pagination = eventsData?.pagination || {
    total_items: 0,
    total_pages: 1,
    current_page: 1,
    items_per_page: limit,
    has_next: false,
    has_previous: false,
  };

  return {
    events,
    pagination,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
};
