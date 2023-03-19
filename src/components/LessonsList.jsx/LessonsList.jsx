import { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { useGetAllCoursesQuery } from "../../redux/lessonsSlice";
import { SingleLesson } from "../SingleLesson/SingleLesson";
import { SkeletonOnLoading } from "../Skeleton/Skeleton";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";

export const LessonsList = () => {
  const { data = [], isLoading, isError, error } = useGetAllCoursesQuery();
  console.log(isError);
  console.log(error?.data);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const pagesCount = Math.round(data?.courses?.length / 10);
  const contentPerPage = 10;
  const lastContentIndex = page * contentPerPage;

  const firstContentIndex = lastContentIndex - contentPerPage;

  return (
    <>
      {isLoading && (
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <SkeletonOnLoading />
          </Grid>
        </Grid>
      )}

      {isError && (
        <ErrorComponent
          statusCode={error?.data?.statusCode}
          message={error?.data?.message}
        />
      )}

      <Grid container spacing={2} justifyContent="center">
        {data?.courses && (
          <Pagination
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
            }}
            count={pagesCount}
            shape="rounded"
            color="primary"
            page={page}
            onChange={handleChange}
          />
        )}
      </Grid>
      <Grid container spacing={2}>
        {data?.courses
          ?.slice(firstContentIndex, lastContentIndex)
          .map((lesson, index) => (
            <Grid item xs={12} sm={6} md={4} key={lesson.id}>
              <SingleLesson lesson={lesson} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
