import { CSSProperties } from "react";

export const wholeContainer = {
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
};

export const containerStyle = {
  display: "grid",
  justifyContent: "space-between",
  width: "70%",
  gridTemplateColumns: `repeat(3, 1fr)`,
  gridGap: "10px",
  padding: "20px",
};

export const itemStyle: CSSProperties = {
  padding: "10px",
  textAlign: "center",
  maxWidth: "200px",
  margin: "0 auto",
};
