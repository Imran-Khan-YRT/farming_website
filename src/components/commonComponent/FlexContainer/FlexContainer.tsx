import { CSSProperties, ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  display?: "flex" | "none";
  flexDirection?: "row" | "column";
  margin?: CSSProperties["margin"];
  paddingInline?: CSSProperties["paddingInline"];
  style?: CSSProperties;
}

const FlexContainer: React.FC<FlexProps> = ({ children, display = "flex", flexDirection = "row", style = {}, margin, paddingInline }) => {
  style = {
    display: display,
    flexDirection: flexDirection,
    margin: margin,
    paddingInline: paddingInline,
    ...style,
  };
  return <div style={style}>{children}</div>;
};

export default FlexContainer;
