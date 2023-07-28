import { CSSProperties } from "react";

export const header_container: CSSProperties = {
  border: "1px solid #A7A7A7",
  paddingInline: "2rem",
  position: "sticky",
  zIndex: "1000",
};

export const header_item_container: CSSProperties = {
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBlock: "10px",
};

export const header_data_container: CSSProperties = {
  gap: "2rem",
  alignItems: "center",
};

export const header_logo: CSSProperties = {
  width: "50px",
  height: "50px",
};

// Mobile styles

export const header_mobile_container: CSSProperties = {
  width: "100%",
  position: "relative",
  height: "100%",
  justifyContent: "center",
};

export const header_mobile_item_container: CSSProperties = {
  position: "fixed",
  width: "80%",
  borderRadius: "10px",
  padding: "10px",
  zIndex: "2000",
  backgroundColor: "white",
  marginInline: "auto",
  justifyContent: "space-between",
  top: "20px",
};

export const header_mobile_logo: CSSProperties = {
  width: "25px",
  height: "25px",
};
