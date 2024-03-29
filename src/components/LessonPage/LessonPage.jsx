import { useGetCourseQuery } from "../../redux/lessonsSlice";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { SkeletonOnLoading } from "../Skeleton/Skeleton";
import { LessonCard } from "../LessonCard/LessonCard";
import { VideoPlayer } from "../Player/Player";
import { TableDurationReleaseDateCategory } from "./table";
import { RaitingDateDuration } from "./RaitingDateDuration";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";

export const LessonPage = () => {
  const { id } = useParams();

  const { data = [], isLoading, isError, error } = useGetCourseQuery(id);

  const {
    id: lessonId,
    title,
    meta,
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

  return (
    <>
      {isLoading && (
        <Container maxWidth="md" disableGutters>
          <Grid container spacing={2} justifyContent="center">
            <SkeletonOnLoading />
          </Grid>
        </Container>
      )}

      {isError && (
        <ErrorComponent
          statusCode={error?.data?.statusCode}
          message={error?.data?.message}
        />
      )}
      {!isLoading && !isError && (
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
                  variant="h2"
                  component="h2"
                  textAlign="center"
                  p="16px 16px 0"
                >
                  {title}
                </Typography>
                <CardContent>
                  <Grid container justifyContent="center">
                    <Grid item md={10}>
                      <VideoPlayer
                        src={meta?.courseVideoPreview?.link}
                        lessonId={lessonId}
                      />
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="h5"
                        color="text.secondary"
                      >
                        To make it louder, press the "+" key, to make it
                        quieter, press the "-" key. Return speed to normal -
                        press 0
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ mt: 1 }} />
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="h2"
                    textAlign="center"
                    mt={2}
                  >
                    {description}
                  </Typography>
                  <RaitingDateDuration
                    category={tags}
                    release_date={launchDate}
                    duration={getMovieRuntime(duration)}
                    rating={data?.rating}
                  />
                  <TableDurationReleaseDateCategory
                    category={tags}
                    release_date={launchDate}
                    duration={getMovieRuntime(duration)}
                    rating={data?.rating}
                  />
                  {data?.meta?.skills && (
                    <List>
                      <Typography variant="h4" color="text.secondary">
                        Skills:
                      </Typography>
                      {data?.meta?.skills?.map((skill, index) => (
                        <ListItem key={index} component="li" disablePadding>
                          &#9734;
                          <ListItemText primary={skill} sx={{ pl: 1 }} />
                        </ListItem>
                      ))}
                    </List>
                  )}
                  <Divider />

                  {data?.lessons && (
                    <>
                      <Typography variant="h4" color="text.secondary" mt={2}>
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
