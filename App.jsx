import { Outlet, NavLink } from "react-router-dom";
import { CssBaseline, Container, Box, Grid } from "@mui/material";
import {
  useGetAuthQuery,
  useGetAllCoursesQuery,
} from "../src/redux/lessonsSlice";

function App() {
  /*   const { data: authData } = useGetAuthQuery();
  console.log(authData.token); */

  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAllCoursesQuery();
  //console.log(data);

  //console.log(data);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box>
          <NavLink to="/">
            <h1>React Router</h1>
          </NavLink>
          <Grid container spacing={2} justifyContent="center">
            <Outlet></Outlet>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
