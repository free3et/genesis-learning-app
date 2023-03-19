import { useGetAllCoursesQuery } from "../../redux/lessonsSlice";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  ListItem,
  ListItemText,
  List,
  Divider,
  Stack,
  Rating,
  //Button,
  Box,
  Pagination,
} from "@mui/material";
import { useState } from "react";

import { SingleLesson } from "../SingleLesson/SingleLesson";
import { SkeletonOnLoading } from "../Skeleton/Skeleton";

export const LessonsList = () => {
  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAllCoursesQuery();
  console.log(data?.courses);

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
          <SkeletonOnLoading />
          <SkeletonOnLoading />
          <SkeletonOnLoading />
        </Grid>
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
            //variant="outlined"
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
