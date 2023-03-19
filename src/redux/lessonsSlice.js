import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lessonsSlice = createApi({
  reducerPath: "lessonsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.wisey.app/api/v1/" }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: (arg) =>
        `/core/preview-courses?token=${import.meta.env.VITE_API_KEY_LESSONS}`,
      method: "GET",
      credentials: "same-origin",
      prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Access-Control-Allow-Headers", "*");
        headers.set(
          "Authorization",
          `Bearer ${import.meta.env.VITE_API_KEY_LESSONS}')`
        );
        return headers;
      },
      mode: "cors",
    }),
    getCourse: builder.query({
      query: (id) =>
        `/core/preview-courses/${id}?token=${
          import.meta.env.VITE_API_KEY_LESSONS
        }`,
      method: "GET",
    }),
  }),
});

export const { useGetAuthQuery, useGetAllCoursesQuery, useGetCourseQuery } =
  lessonsSlice;
