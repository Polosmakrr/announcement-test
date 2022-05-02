import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const announcementApi = createApi({
  reducerPath: 'announcementApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62658ffcdbee37aff9a6bf70.mockapi.io/' }),
  tagTypes: ['Announcement'],
  endpoints: builder => ({
    fetchAnnouncement: builder.query({
      query: () => `announcement/`,
      providesTags: ['Announcement'],
    }),

    fetchAnnouncementId: builder.query({
      query: id => `announcement/${id}`,
      providesTags: ['Announcement'],
    }),

    deleteAnnouncement: builder.mutation({
      query: announcementId => ({
        url: `announcement/${announcementId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Announcement'],
    }),

    createAnnouncement: builder.mutation({
      query: newAnnouncement => ({
        url: 'announcement/',
        method: 'POST',
        body: newAnnouncement,
      }),
      invalidatesTags: ['Announcement'],
    }),

    updateAnnouncement: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/announcement/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['Announcement'],
    }),
  }),
});

export const {
  useFetchAnnouncementQuery,
  useCreateAnnouncementMutation,
  useDeleteAnnouncementMutation,
  useFetchAnnouncementIdQuery,
  useUpdateAnnouncementMutation,
} = announcementApi;
