import { NavLink, Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import PropTypes from "prop-types";
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Fab,
  Fade,
} from "@mui/material";
import { theme } from "./theme";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "./assets/logo.svg";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "./components/Footer/Footer";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export const Layout = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar>
          <Toolbar
            sx={{
              background: "linear-gradient(45deg, #bbe7ff, #0274b2)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src={logo} className="App-logo" alt="logo" />
            </Box>
            <Box>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <Typography variant="subtitle1" component="span">
                  My Courses
                </Typography>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Container maxWidth="lg" sx={{ mt: 3 }} disableGutters>
          <Outlet></Outlet>
        </Container>
        <Footer />
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
