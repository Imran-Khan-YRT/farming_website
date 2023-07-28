import { CSSProperties, ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  display?: "flex" | "none";
  flexDirection?: "row" | "column";
  style?: CSSProperties;
}

const FlexContainer: React.FC<FlexProps> = ({ children, display = "flex", flexDirection = "row", style = {} }) => {
  style = {
    display: display,
    flexDirection: flexDirection,
    ...style,
  };
  return <div style={style}>{children}</div>;
};

export default FlexContainer;
