import Carousel from "../commonComponent/Carousel/Carousel";
import { app_logo, home_image1, home_image2, home_image3 } from "../../assets";
import FlexContainer from "../commonComponent/FlexContainer/FlexContainer";
import MenuIcon from "@mui/icons-material/Menu";
import { header_mobile_container, header_mobile_item_container, header_mobile_logo } from "./headerStyle";
import { useState } from "react";

const HeaderMobile = () => {
  const [active, setActive] = useState("home");
  const imageList = [home_image1, home_image2, home_image3];
  const carouselItems = [...imageList];
  console.log(active);
  return (
    <FlexContainer style={header_mobile_container}>
      <FlexContainer style={header_mobile_item_container}>
        <img src={app_logo} alt="App Logo" style={header_mobile_logo} />
        <MenuIcon />
      </FlexContainer>
      <Carousel items={carouselItems} />
    </FlexContainer>
  );
};

export default HeaderMobile;
