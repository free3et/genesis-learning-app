import { Typography, Divider, Stack, Rating, Box, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";

export const RaitingDateDuration = ({
  category,
  duration,
  release_date,
  rating,
}) => {
  return (
    <>
      <Grid
        sx={{ display: { xl: "none", md: "none", sm: "none", xs: "block" } }}
      >
        <Divider />
        <Stack spacing={1} sx={{ flexDirection: "row", mt: 2 }}>
          <Rating
            name="half-rating-read"
            size="small"
            value={rating || +""}
            precision={0.1}
            mt={2}
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
            mb: 1.2,
            p: 0.5,
            borderRadius: 1,
            border: "2px solid #9c27b0",
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            textTransform="capitalize"
          >
            {category}
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="body1"
          component="h2"
          display="flex"
          pt={1}
        >
          <AccessTimeIcon fontSize="small" sx={{ mr: 0.6 }} />
          {duration}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          component="h2"
          display="flex"
          pt={1}
        >
          <DateRangeIcon fontSize="small" sx={{ mr: 0.6 }} />
          {release_date?.slice(0, 10)}
        </Typography>
      </Grid>
    </>
  );
};
