import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    info: {
      main: "#01b4e4",
    },
    success: {
      main: "#1ed5a9",
    },
    warning: {
      main: "#ed9f35",
    },
    error: {
      main: "#d93b3b",
    },
    text: {
      hint: "rgba(0,0,0,0.5)",
    },
  },
  typography: {
    fontSize: 1.75,
    htmlFontSize: 1.5,

    h1: {
      fontSize: "2.5em",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: "1.6em",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: "1.6em",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.3em",
      fontWeight: 600,
      lineHeight: 1.5,
      marginBottom: ".3em",
    },
    subtitle1: {
      fontSize: "1.2em",
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: "1em",
    },
    body1: {
      fontSize: "1.1em",
    },
    body2: {
      fontSize: "0.9em",
    },
    caption: {
      fontSize: "0.7em",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    button: {
      fontSize: "0.7em",
      fontWeight: 600,
    },
  },
});
