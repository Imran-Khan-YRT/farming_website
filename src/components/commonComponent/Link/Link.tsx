import React from "react";
import { Link } from "react-router-dom";

interface CommonLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const CommonLink: React.FC<CommonLinkProps> = ({ to, children }) => {
  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "inherit", // Inherit color from parent to avoid unexpected link color changes.
  };

  return (
    <Link to={to} style={linkStyle}>
      {children}
    </Link>
  );
};

export default CommonLink;
