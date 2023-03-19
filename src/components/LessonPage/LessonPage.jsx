import { useGetCourseQuery } from "../../redux/lessonsSlice";
import { useParams, NavLink } from "react-router-dom";
import { useRef } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Divider,
  Stack,
  Rating,
  //Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { SkeletonOnLoading } from "../Skeleton/Skeleton";

import { LessonCard } from "../LessonCard/LessonCard";
import { VideoPlayer } from "../Player/Player";

export const LessonPage = () => {
  const { id } = useParams();

  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetCourseQuery(id);

  const {
    id: lessonId,
    title,
    previewImageLink,
    meta,
    lessons,
    //rating,
    description,
    duration,
    launchDate,
    tags,
  } = data;

  const getMovieRuntime = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;

    return `${hours}h ${minutes}m`;
  };

  const playerRef = useRef();

  return (
    <>
      {isLoading && (
        <Container maxWidth="md" disableGutters>
          <Grid container spacing={2} justifyContent="center">
            <SkeletonOnLoading />
          </Grid>
        </Container>
      )}
      {!isLoading && (
        <Container maxWidth="md" disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={12} key={id}>
              <Card
                sx={{
                  m: 2,
                  backgroundColor: "rgba(255, 255, 255, .65)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, .25)",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h2"
                  textAlign="center"
                  p={2}
                >
                  {title}
                </Typography>
                {/*           <Grid container spacing={2} justifyContent="center">
                <Grid item md={11}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={previewImageLink + "/cover.webp"}
                    alt={title}
                  />
                </Grid>
              </Grid> */}

                <CardContent>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item md={8}>
                      <VideoPlayer
                        src={meta?.courseVideoPreview?.link}
                        lessonId={lessonId}
                      />
                      <Typography gutterBottom variant="body1" component="h2">
                        To make it louder, press the + key, to make it quieter,
                        press the - key. Return speed to normal - press 0
                      </Typography>
                    </Grid>
                  </Grid>
                  <Stack spacing={1} sx={{ flexDirection: "row" }}>
                    <Rating
                      name="half-rating-read"
                      value={+data?.rating || +""}
                      precision={0.1}
                      readOnly
                    />
                    <Typography variant="body2" color="text.secondary" pl={2}>
                      [{data?.rating}]
                    </Typography>
                  </Stack>
                  <Typography gutterBottom variant="body1" component="h2">
                    {description}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2">
                    {getMovieRuntime(duration)}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2">
                    {launchDate?.slice(0, 10)}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {/* <Button variant="contained" color="secondary"> */}
                    {tags}
                    {/* </Button> */}
                  </Stack>
                  {data?.meta?.skills && (
                    <List>
                      <Typography variant="h5" color="text.secondary">
                        Skills:
                      </Typography>
                      {data?.meta?.skills?.map((skill, index) => (
                        <ListItem key={index} component="li" disablePadding>
                          &#9734;
                          <ListItemText primary={skill} />
                        </ListItem>
                      ))}
                    </List>
                  )}
                  <Divider />

                  {data?.lessons && (
                    <>
                      <Typography variant="h5" color="text.secondary">
                        Lessons:
                      </Typography>
                      <Grid container spacing={2}>
                        {data?.lessons?.map((lesson, index) => (
                          <Grid item xs={12} sm={6} md={4} key={lesson.id}>
                            <LessonCard lesson={lesson} key={lesson.title} />
                          </Grid>
                        ))}
                      </Grid>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};
