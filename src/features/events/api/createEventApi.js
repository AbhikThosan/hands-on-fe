import apiSlice from "../../../services/apiSlice";

export const createEventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (eventData) => ({
        url: "/events",
        method: "POST",
        body: eventData,
      }),
      invalidatesTags: [{ type: "Events", id: "LIST" }],
    }),
  }),
});

export const { useCreateEventMutation } = createEventApi;
