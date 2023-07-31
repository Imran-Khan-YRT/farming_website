import { Typography } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
  margin?: CSSProperties["margin"];
  backgroundColor?: CSSProperties["backgroundColor"];
  borderRadius?: CSSProperties["borderRadius"];
  padding?: CSSProperties["padding"];
  paddingBottom?: CSSProperties["paddingBottom"];
  style?: CSSProperties;
}

const PageContainer: React.FC<PageProps> = ({ title, children, style = {}, margin = "3rem", backgroundColor = "#F3F3F3", borderRadius = "10px", padding = "3rem", paddingBottom }) => {
  style = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    ...style,
  };
  return (
    <div style={{ padding: padding, paddingBottom: paddingBottom, margin: margin }}>
      <Typography variant="h3" style={{ paddingBottom: "2rem" }}>
        {title}{" "}
      </Typography>
      <div style={style}>{children}</div>
    </div>
  );
};

export default PageContainer;
