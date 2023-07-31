import { Typography } from "@mui/material";
import { app_logo } from "../../assets";
import useDynamicTranslation from "../../utils/customHook/dynamicTranslation";
import Button from "../commonComponent/Button/Button";
import FlexContainer from "../commonComponent/FlexContainer/FlexContainer";
import Link from "../commonComponent/Link/Link";
import data from "../../assets/combined/en/translation.json";
import { header_container, header_data_container, header_item_container, header_logo } from "./headerStyle";

const HaederPc = () => {
  // handle click later
  const handleClick = () => {};
  const headerData = Object.keys(data.navbar.menu);
  const t = useDynamicTranslation();
  console.log(headerData);
  return (
    <FlexContainer style={header_container}>
      <FlexContainer style={header_item_container}>
        <Link to="/">
          <img src={app_logo} alt="App Logo" style={header_logo} />
        </Link>
        <FlexContainer style={header_data_container}>
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
