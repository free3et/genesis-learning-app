import { useState } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
import { VideoPlayer } from "../Player/Player";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  boxShadow: 24,
  borderRadius: 1.5,
  p: 2,
  backgroundColor: "rgba(255, 255, 255, .95)",
};

export const VideoModal = ({ title, src, lessonId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        Watch Video
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            textAlign="center"
            mb="10px"
          >
            {title}
          </Typography>
          <Grid item>
            <VideoPlayer src={src} lessonId={lessonId} />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};
