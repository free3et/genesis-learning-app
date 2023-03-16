import { useGetCourseQuery } from "../../redux/lessonsSlice";
import { useParams } from "react-router-dom";
import {
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
import { Loader } from "../Loader/Loader";
import { NavLink } from "react-router-dom";

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

  console.log(data);
  const getMovieRuntime = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;

    return `${hours}h ${minutes}m`;
  };

  return (
    <>
      {isLoading && (
        <Grid container spacing={2} justifyContent="center">
          <Loader />
        </Grid>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} key={id}>
          <NavLink className="read-more" to={id}>
            <Card
              sx={{
                m: 2,
                backgroundColor: "rgba(255, 255, 255, .65)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, .25)",
                borderRadius: "10px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={previewImageLink + "/cover.webp"}
                  alt={title}
                />
                <Box>
                  <video
                    id="my-video"
                    className="video-js"
                    width="352"
                    height="198"
                    controls
                    preload="auto"
                    data-setup="{}"
                  >
                    <source
                      src="https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8"
                      type="application/x-mpegURL"
                    />
                  </video>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2">
                    {description}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2">
                    {getMovieRuntime(duration)}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2">
                    {launchDate?.slice(0, 10)}
                  </Typography>
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
                  <Stack spacing={1} sx={{ flexDirection: "row" }}>
                    <Rating
                      name="half-rating-read"
                      value={data?.rating || ""}
                      precision={0.1}
                      readOnly
                    />
                    <Typography variant="body2" color="text.secondary" pl={2}>
                      [{data?.rating}]
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    {/* <Button variant="contained" color="secondary"> */}
                    {tags}
                    {/* </Button> */}
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>
        </Grid>
      </Grid>
    </>
  );
};
