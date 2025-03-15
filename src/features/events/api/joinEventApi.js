import { apiSlice } from "../../../services/apiSlice";

export const joinEvent = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    joinEvent: builder.mutation({
      query: (eventId) => ({
        url: `/events/${eventId}/join`,
        method: "POST",
      }),
      invalidatesTags: (result, error, eventId) => [
        { type: "Events", id: eventId },
        { type: "Events", id: "LIST" },
      ],
    }),
  }),
});

export const { useJoinEventMutation } = joinEvent;
