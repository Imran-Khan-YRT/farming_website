import { Typography } from "@mui/material";
import app_logo from "../../assets/Home/app_logo.png";
import useDynamicTranslation from "../../utils/customHook/dynamicTranslation";
import Button from "../commonComponent/Button/Button";
import FlexContainer from "../commonComponent/FlexContainer/FlexContainer";
// import { Link } from "react-router-dom";
import Link from "../commonComponent/Link/Link";
import data from "../../assets/combined/en/translation.json";
import Image from "../commonComponent/Image/Image";

const HaederPc = () => {
  // handle click later
  const handleClick = () => {};
  const headerData = Object.keys(data.navbar.menu);
  const t = useDynamicTranslation();
  console.log(headerData);
  return (
    <FlexContainer border="1px solid gray" paddingInline="1rem" style={{ position: "sticky", zIndex: "1000" }}>
      <FlexContainer width="100%" paddingBlock="10px">
        <Image src={app_logo} alt="App Logo" />
        <FlexContainer gap="2rem">
          {headerData.map((data) => (
            <Link to={data} key={data}>
              <Typography variant="body1">{t(`navbar.menu.${data}`)}</Typography>
            </Link>
          ))}
          <Button children={t("navbar.button.downloadSignUp")} onClick={handleClick}></Button>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default HaederPc;
