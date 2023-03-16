import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lessonsSlice = createApi({
  reducerPath: "lessonsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.wisey.app/api/v1/" }),
  endpoints: (builder) => ({
    /*     getAuth: builder.query({
      query: (arg) => `/auth/anonymous?platform=subscriptions`,
      method: "GET",
    }), */
    getAllCourses: builder.query({
      query: (arg) => "/core/preview-courses/",
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0.Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM",
      },
    }),
    getCourse: builder.query({
      query: (id) => "/core/preview-courses/${id}",
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0.Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM",
      },
    }),
  }),
});

export const { useGetAuthQuery, useGetAllCoursesQuery, useGetCourseQuery } =
  lessonsSlice;
