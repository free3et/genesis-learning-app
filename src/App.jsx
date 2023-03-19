import { NavLink, Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import logo from "./assets/logo.svg";

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
              to="/genesis-learning-app/"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <Typography variant="h6" component="span">
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
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
