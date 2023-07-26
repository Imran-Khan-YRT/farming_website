import { PaletteColorOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: PaletteColorOptions;
  }
  interface PaletteOptions {
    custom?: PaletteColorOptions;
  }
}
// all values
const theme = createTheme({
  palette: {
    primary: {
      // background color gets from here
      main: "#ffffff",
    },
    custom: {
      main: "#8AC43F0",
    },
  },
  // use typography for all texts
  typography: {
    body1: {
      fontSize: "1rem",
      color: "#000000",
      fontWeight: "400",
      lineHeight: "3rem",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});
export default theme;
