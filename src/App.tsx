import React from "react";
import "./App.css";
import useDynamicTranslation from "./util/customHook/dynamicTranslation";

function App() {
  const t = useDynamicTranslation();
  return (
    <div>
      <h1>{t("greeting")}</h1>
    </div>
  );
}

export default App;
