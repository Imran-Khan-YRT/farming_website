import data from "../../assets/combined/en/translation.json";
import useResponsive from "../../utils/customHook/useResponsive";
import HaederPc from "./HaederPc";

const Header = () => {
  const headerData = Object.keys(data.navbar.menu);
  const { isPC } = useResponsive();
  console.log(headerData);
  return <>{isPC ? <HaederPc /> : <div></div>}</>;
};

export default Header;
