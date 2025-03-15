import { apiSlice } from "../../../services/apiSlice";

export const eventsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: ({
        page = 1,
        limit = 10,
        category,
        location,
        date,
        all,
      } = {}) => ({
        url: "/events",
        params: {
          page,
          limit,
          ...(category && { category }),
          ...(location && { location }),
          ...(date && { date }),
          ...(all !== undefined && { all }),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.events.map(({ id }) => ({ type: "Events", id })),
              { type: "Events", id: "LIST" },
            ]
          : [{ type: "Events", id: "LIST" }],
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
