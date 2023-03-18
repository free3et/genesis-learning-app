import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Badge,
  Button,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import { VideoModal } from "../Modal/Modal";

export const LessonCard = ({ lesson }) => {
  if (!lesson) return;

  const { id, previewImageLink, order, title, link, status } = lesson;

  return (
    <>
      {status === "locked" && (
        <Card sx={{ position: "relative", opacity: 0.7 }}>
          <CardMedia
            component="img"
            height="140"
            image={previewImageLink + "/lesson-" + order + ".webp"}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Button variant="outlined" color="secondary">
              Start trial for $0.99
            </Button>
            <Badge
              color="primary"
              sx={{ position: "absolute", bottom: 0, right: 0 }}
            >
              <LockIcon color="error" />
            </Badge>
          </CardContent>
        </Card>
      )}
      {status === "unlocked" && (
        <Card sx={{ cursor: "pointer" }}>
          <CardMedia
            component="img"
            height="140"
            image={previewImageLink + "/lesson-" + order + ".webp"}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>

            <VideoModal lessonId={id} title={title} src={link} />
          </CardContent>
        </Card>
      )}
    </>
  );

  /*
    <NavLink className="read-more" to={id}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={previewImageLink + "/lesson-" + order + ".webp"}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <Grid item>
              <VideoPlayer muted={true} src={link} />
            </Grid>
            {status === "locked" && (
              <Badge
                color="primary"
                sx={{ position: "absolute", bottom: 0, right: 0 }}
              >
                <LockIcon color="error" />
              </Badge>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink> */
};
