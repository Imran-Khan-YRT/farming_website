import React, { CSSProperties } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  height?: string;
  padding?: string;
  style?: CSSProperties;
  onHoverBackgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, backgroundColor = "#8ac43f", color = "#ffffff", onHoverBackgroundColor = "#006738", style = {} }) => {
  const CustomButton = styled(Button)({
    backgroundColor: backgroundColor,
    color: color,
    padding: "12px",
    height: "34px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: onHoverBackgroundColor,
    },
    ...style,
  });

  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default CustomButton;
