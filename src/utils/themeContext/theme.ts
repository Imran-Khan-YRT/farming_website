import { ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";
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

// declare module "@mui/material/styles" {
//   interface Theme {
//     sectionText: SectionText;
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     sectionText?: SectionText;
//   }
// }

// interface SectionText {
//   fontSize: string;
//   fontWeight: number;
//   color: string;
//   title: {
//     fontSize: string;
//     fontWeight: number;
//     color: string;
//   };
//   description: {
//     fontSize: string;
//     color: string;
//   };
// }
// all values
const fontFamilyPoppins = "poppins,sans-serif";
const theme = createTheme({
  palette: {
    primary: {
      // background color gets from here
      main: "#8AC43F",
    },
    secondary: {
      main: "#8AC43F",
    },
    custom: {
      main: "#8AC43F",
    },
  },
  // use typography for all texts
  typography: {
    body1: {
      fontSize: "1rem",
      color: "#000000",
      fontWeight: "400",
      letterSpacing: "0em",
      textAlign: "left",
    },
    // section title h3
    h3: {
      fontFamily: fontFamilyPoppins,
      fontSize: "1.8rem",
      color: "#000000",
      fontWeight: "500",
      lineHeight: "3rem",

      "@media (max-width: 768px)": {
        fontSize: "1.2rem",
      },
    },
    // description h4
    h4: {
      fontFamily: fontFamilyPoppins,
      fontSize: "1.1rem",
      color: "#000000",
      fontWeight: "300",
      lineHeight: "2rem",
      "@media (max-width: 768px)": {
        lineHeight: "0.9rem",
      },
    },
    h5: { fontSize: "1rem", color: "#000000", fontWeight: "400" },
    h6: {
      fontFamily: fontFamilyPoppins,
      fontSize: "0.8rem",
      color: "#000000",
      fontWeight: "300",
      lineHeight: "1.5rem",
      "@media (max-width: 768px)": {
        lineHeight: "0.9rem",
      },
    },
  },

  // overrides
});
export default theme;
