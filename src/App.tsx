import React from "react";
import "./App.css";
import useDynamicTranslation from "./utils/customHook/dynamicTranslation";
import { Box, Typography } from "@mui/material";
import Header from "./components/Header/Header";

function App() {
  const t = useDynamicTranslation();
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
