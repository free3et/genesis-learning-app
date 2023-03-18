import { NavLink, Outlet } from "react-router-dom";
import { Container } from "@mui/system";

export const App = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      <nav>
        <NavLink to="/">Back</NavLink>
      </nav>
      <Outlet></Outlet>
    </Container>
  );
};
