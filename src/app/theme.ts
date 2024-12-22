// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0077B6", 
    },
    secondary: {
      main: "#ff4081",
    },
    text: {
      primary: "#171717",
      secondary: "#171717",  
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff", 
    },
  },
  typography: {
    fontFamily: '"Geist Sans", "Arial", sans-serif',
  },
});

export default theme;