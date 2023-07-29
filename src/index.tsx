import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./utils/themeContext/ThemeContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* Suspense to load the translation file */}
        <Suspense fallback="Loading...">
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
