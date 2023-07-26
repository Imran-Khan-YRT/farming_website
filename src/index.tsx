import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./utils/themeContext/ThemeContext";
import GetRoutes from "./utils/Route";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Suspense to load the translation file */}
      <Suspense fallback="Loading...">
        <ThemeProvider>
          <App />
          <GetRoutes />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
