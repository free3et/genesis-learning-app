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
            height="180"
            image={previewImageLink + "/cover.webp"}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h3" mb={2}>
              {title}
            </Typography>

            <Grid item mb={1.5}>
              <VideoPlayerWithHover
                muted={true}
                src={meta?.courseVideoPreview?.link}
              />
            </Grid>
            {lessonsCount && (
              <Typography variant="h4">
                Number of lessons: {lessonsCount}
              </Typography>
            )}
            {meta?.skills && (
              <List>
                <Typography variant="h4">Skills:</Typography>
                {meta?.skills?.map((skill, index) => (
                  <ListItem key={index} component="li" disablePadding>
                    &#9734;
                    <ListItemText primary={skill} sx={{ pl: 1 }} />
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
                size="small"
                readOnly
              />
              <Typography
                variant="subtitle2"
                color="secondary"
                pl={2}
                sx={{ mt: 0 }}
              >
                [{rating}]
              </Typography>
            </Stack>
            <Box
              direction="row"
              spacing={2}
              sx={{
                display: "inline-block",
                mt: 1,
                p: 0.7,
                borderRadius: 1,
                border: "2px solid #9c27b0",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                textTransform="capitalize"
              >
                {tags}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};
