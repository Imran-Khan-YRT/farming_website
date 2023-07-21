import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* Suspense to load the translation file */}
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </React.StrictMode>
);
