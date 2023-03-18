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
} from "@mui/material";
import { VideoPlayerWithHover } from "../Player/PlayerWithHover";

export const SingleLesson = ({ lesson }) => {
  if (!lesson) return;

  const {
    id,
    previewImageLink,
    order,
    title,
    lessonsCount,
    meta,
    rating,
    tags,
  } = lesson;

  return (
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
          <CardContent>
            <Typography gutterBottom variant="h25" component="h2">
              {title}
            </Typography>
            {lessonsCount && (
              <Typography variant="subtitle1" color="text.secondary">
                Number of lessons: {lessonsCount}
              </Typography>
            )}
            <Grid item>
              <VideoPlayerWithHover
                muted={true}
                src={meta?.courseVideoPreview?.link}
              />
            </Grid>
            {meta?.skills && (
              <List>
                <Typography variant="h5" color="text.secondary">
                  Skills:
                </Typography>
                {meta?.skills?.map((skill, index) => (
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
                value={rating}
                precision={0.1}
                readOnly
              />
              <Typography variant="body2" color="text.secondary" pl={2}>
                [{rating}]
              </Typography>
            </Stack>
            <Box direction="row" spacing={2}>
              {/*             <Button variant="contained" color="secondary"> */}
              {tags && tags[0]}
              {/*     </Button> */}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};
