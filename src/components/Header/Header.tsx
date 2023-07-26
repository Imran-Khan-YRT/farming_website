import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import app_logo from "../../assets/Home/app_logo.png";
import useDynamicTranslation from "../../utils/customHook/dynamicTranslation";
import { headerData } from "./headerData";
import "./header.css";
import Button from "../commonComponent/Button/Button";

const Header = () => {
  // handle click later
  const handleClick = () => {};
  const t = useDynamicTranslation();
  return (
    <AppBar>
      <Toolbar className="container">
        <Box>
          <img src={app_logo} alt="App Logo" className="header_img" />
        </Box>
        <Box className="header_menu">
          {headerData.map((data) => (
            <Link>
              <Typography variant="body1">{t(data)}</Typography>
            </Link>
          ))}
          <Button children={t("navbar.button.downloadSignUp")} onClick={handleClick}></Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
