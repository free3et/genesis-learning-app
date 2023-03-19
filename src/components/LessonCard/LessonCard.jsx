import {
  Card,
  CardContent,
  CardMedia,
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
        <Card sx={{ position: "relative", opacity: 0.7, minHeight: "282px" }}>
          <CardMedia
            component="img"
            height="140"
            image={previewImageLink + "/lesson-" + order + ".webp"}
            alt={title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle2"
              fontWeight="bold"
              component="h4"
            >
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
        <Card sx={{ cursor: "pointer", minHeight: "282px" }}>
          <CardMedia
            component="img"
            height="140"
            image={previewImageLink + "/lesson-" + order + ".webp"}
            alt={title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle2"
              fontWeight="bold"
              component="h4"
            >
              {title}
            </Typography>

            <VideoModal lessonId={id} title={title} src={link} />
          </CardContent>
        </Card>
      )}
    </>
  );
};
