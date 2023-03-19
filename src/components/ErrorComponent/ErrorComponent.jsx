import { Grid, Container, Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ErrorComponent = ({ message, statusCode }) => {
  return (
    <Container maxWidth="md">
      <Grid container m={2} spacing={2} p={2} sx={{ minHeight: "55vh" }}>
        <Grid item>
          <Typography variant="h2" mb={2}>
            Oops! Sorry, something went wrong
          </Typography>
          <Typography variant="h4" mb={2}>
            Status Code: {statusCode}
          </Typography>
          <Typography variant="subtitle2" sx={{ wordBreak: "break-all" }}>
            {message}
          </Typography>
          <Box mt={2}>
            <Button variant="contained" color="secondary">
              <NavLink
                to="/genesis-learning-app/"
                style={{ textDecoration: "none" }}
              >
                Go Home
              </NavLink>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
