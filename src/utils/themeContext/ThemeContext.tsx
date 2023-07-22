// ThemeContext.tsx
import React, { createContext, useContext } from "react";
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "./theme";

// Create the theme context
const ThemeContext = createContext(theme);

// Create a custom hook to access the theme context
export function useThemeContext() {
  return useContext(ThemeContext);
}

// Create the ThemeProvider that wraps the MuiThemeProvider and StyledEngineProvider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
