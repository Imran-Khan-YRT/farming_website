import { CSSProperties, ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  display?: "flex" | "none";
  flexDirection?: "row" | "column";
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  style?: CSSProperties;
}

const FlexContainer: React.FC<FlexProps> = ({ children, display = "flex", flexDirection = "row", alignItems = "center", justifyContent = "space-between", style = {} }) => {
  style = {
    display: display,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    ...style,
  };
  return <div style={style}>{children}</div>;
};

export default FlexContainer;
