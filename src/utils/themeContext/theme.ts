import { PaletteColorOptions, createTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Palette {
    custom: PaletteColorOptions;
  }
  interface PaletteOptions {
    custom?: PaletteColorOptions;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    sectionText: SectionText;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    sectionText?: SectionText;
  }
}

interface SectionText {
  fontSize: string;
  fontWeight: number;
  color: string;
}
// all values
const theme = createTheme({
  palette: {
    primary: {
      // background color gets from here
      main: "#8AC43F0",
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
    h3: { fontSize: "1.4rem", color: "#000000", fontWeight: "500" },
    h4: { fontSize: "1.2rem", color: "#000000", fontWeight: "450" },
    h5: { fontSize: "1rem", color: "#000000", fontWeight: "400" },
  },
  sectionText: {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "#333",
  },
});
export default theme;
