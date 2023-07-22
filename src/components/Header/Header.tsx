import { AppBar, Box, Link, Button, Toolbar, Typography } from "@mui/material";
import app_logo from "../../assets/Home/app_logo.png";
import useDynamicTranslation from "../../utils/customHook/dynamicTranslation";
import { headerData, downloadBtn } from "./headerData";
import "./header.css";

const Header = () => {
  const t = useDynamicTranslation();
  return (
    // <AppBar>
    // <Toolbar className="container">
    <>
      <Box>
        <img src={app_logo} alt="App Logo" className="header_img" />
      </Box>
      <Box className="header_menu">
        {headerData.map((data) => (
          <Link>
            <Typography variant="body1">{t(data)}</Typography>
          </Link>
        ))}
        <Button className="header_btn" variant="contained">
          {t(downloadBtn)}
        </Button>
      </Box>
    </>
    // </Toolbar>
    // {/* </AppBar> */}
  );
};

export default Header;
