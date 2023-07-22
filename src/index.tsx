import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./utils/themeContext/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* Suspense to load the translation file */}
    <Suspense fallback="Loading...">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
