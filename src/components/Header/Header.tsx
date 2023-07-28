import data from "../../assets/combined/en/translation.json";
import useResponsive from "../../utils/customHook/useResponsive";
import HaederPc from "./HaederPc";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const headerData = Object.keys(data.navbar.menu);
  const { isPC } = useResponsive();
  console.log(headerData);
  return <>{isPC ? <HaederPc /> : <HeaderMobile />}</>;
};

export default Header;
