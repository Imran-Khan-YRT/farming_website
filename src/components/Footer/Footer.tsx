import React from "react";
import FlexContainer from "../commonComponent/FlexContainer/FlexContainer";
import { Image } from "@mui/icons-material";
import { app_logo } from "../../assets/Home";
import { containerStyle, itemStyle, wholeContainer } from "./FooterStyle";
import data from "../../assets/combined/en/translation.json";
import useDynamicTranslation from "../../utils/customHook/dynamicTranslation";

const Footer = () => {
  const t = useDynamicTranslation();
  const footerData = Object.keys(data.footer.items);
  console.log(footerData);
  const items = footerData.map((value) => (
    <div key={value} style={itemStyle}>
      {t(`footer.items.${value}`)}
    </div>
  ));
  return (
    <FlexContainer style={wholeContainer} paddingInline="4rem">
      <img src={app_logo} alt="App Logo" width={50} height={50} />
      <FlexContainer style={containerStyle}>{items}</FlexContainer>
    </FlexContainer>
  );
};

export default Footer;
