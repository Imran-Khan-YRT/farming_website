import { CSSProperties } from "react";

export const wholeContainer = {
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
};

export const containerStyle = {
  display: "grid",
  justifyContent: "space-between",
  width: "100%",
  gridTemplateColumns: `repeat(3, 1fr)`,
  gridGap: "10px",
  padding: "20px",
  " @media (max-width: 768px)": {
    gridTemplateColumns: "1fr", // Change to one column for mobile screens
  },
};

export const itemStyle: CSSProperties = {
  padding: "10px",
  textAlign: "center",
  maxWidth: "200px",
  margin: "0 auto",
};
