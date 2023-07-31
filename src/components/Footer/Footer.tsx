import React from "react";
import FlexContainer from "../commonComponent/FlexContainer/FlexContainer";
import { Image } from "@mui/icons-material";
import { app_logo, footerButtonImg } from "../../assets";
import { containerStyle, itemStyle, wholeContainer } from "./FooterStyle";
import data from "../../assets/combined/en/translation.json";
import useDynamicTranslation from "../../utils/customHook/dynamicTranslation";
import PageContainer from "../commonComponent/PageContainer/PageContainer";
import useResponsive from "../../utils/customHook/useResponsive";
import { footerIcons } from "../../assets";
import { Typography } from "@mui/material";

const footerData = Object.keys(data.footer.items);
console.log(footerData);

const FooterPC = () => {
  const t = useDynamicTranslation();
  const items = footerData.map((value) => (
    <div key={value} style={itemStyle}>
      {t(`footer.items.${value}`)}
    </div>
  ));

  return (
    <PageContainer title={""} margin="0rem" padding="0rem">
      <FlexContainer style={{ alignItems: "center", padding: "4rem", justifyContent: "space-between" }}>
        <img src={app_logo} alt="App Logo" width={60} height={60} />
        <FlexContainer style={containerStyle}>{items}</FlexContainer>
      </FlexContainer>
      <FlexContainer style={{ justifyContent: "space-between", flexWrap: "wrap", padding: "3rem", alignContent: "center" }}>
        <FlexContainer style={{ gap: "15px" }}>
          {footerIcons.map((val) => (
            <img src={val} alt="val" width="25px" height="25px" />
          ))}
        </FlexContainer>
        <FlexContainer style={{ gap: "15px" }}>
          {footerButtonImg.map((val) => (
            <img src={val} alt="btn" />
          ))}
        </FlexContainer>
      </FlexContainer>
      <FlexContainer style={{ justifyContent: "space-around", paddingBottom: "20px" }}>
        <Typography variant="h6">Privacy Policy | Terms & Condition | Site Map</Typography>
        <Typography variant="h6">2023. All Rights Reserved MIMODZI.com </Typography>
      </FlexContainer>
    </PageContainer>
  );
};

const FooterMobile = () => {
  const t = useDynamicTranslation();
  const items = footerData.map((value) => (
    <div key={value} style={itemStyle}>
      {t(`footer.items.${value}`)}
    </div>
  ));
  return (
    <PageContainer title={""} margin="0rem" padding="0rem">
      <FlexContainer flexDirection="column" style={{ alignItems: "center", padding: "3rem", justifyContent: "space-between" }}>
        <img src={app_logo} alt="App Logo" width={50} height={50} />
        <FlexContainer flexDirection="column">{items}</FlexContainer>
      </FlexContainer>
      <FlexContainer flexDirection="column" style={{ justifyContent: "space-between", flexWrap: "wrap", padding: "2rem", gap: "2rem", alignItems: "center" }}>
        <FlexContainer style={{ gap: "10px" }}>
          {footerIcons.map((val) => (
            <img src={val} alt="val" width="25px" height="25px" />
          ))}
        </FlexContainer>
        <FlexContainer style={{ gap: "15px" }}>
          {footerButtonImg.map((val) => (
            <img src={val} alt="btn" />
          ))}
        </FlexContainer>
      </FlexContainer>

      <FlexContainer style={{ justifyContent: "space-around", paddingBottom: "20px" }}>
        <Typography variant="h6">Privacy Policy | Terms & Condition | Site Map</Typography>
        <Typography variant="h6">2023. All Rights Reserved MIMODZI.com </Typography>
      </FlexContainer>
    </PageContainer>
  );
};

const Footer = () => {
  const { isPC } = useResponsive();
  return isPC ? <FooterPC /> : <FooterMobile />;
};

export default Footer;
