import { CSSProperties, ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  display?: "flex" | "none";
  flexDirection?: "row" | "column";
  border?: CSSProperties["border"];
  style?: CSSProperties;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  paddingInline?: CSSProperties["paddingInline"];
  gap?: CSSProperties["gap"];
  margin?: CSSProperties["margin"];
  boxShadow?: CSSProperties["boxShadow"];
  width?: CSSProperties["width"];
  paddingBlock?: CSSProperties["paddingBlock"];
}

const FlexContainer: React.FC<FlexProps> = ({
  children,
  display = "flex",
  flexDirection = "row",
  alignItems = "center",
  justifyContent = "space-between",
  paddingInline,
  border,
  gap,
  margin,
  boxShadow,
  width,
  paddingBlock,
  style = {},
}) => {
  style = {
    display: display,
    flexDirection: flexDirection,
    border: border,
    justifyContent: justifyContent,
    alignItems: alignItems,
    paddingInline: paddingInline,
    gap: gap,
    margin: margin,
    boxShadow: boxShadow,
    width: width,
    paddingBlock: paddingBlock,
    ...style,
  };
  return <div style={style}>{children}</div>;
};

export default FlexContainer;
