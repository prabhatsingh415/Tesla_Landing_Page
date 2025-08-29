import useMediaQuery from "../../hooks/useMediaQuery.jsx";
import DesktopHeader from "./DesktopHeader.jsx";
import MobileHeader from "./MobileHeader.jsx";

function Header() {
  const isDesktop = useMediaQuery(1024);
  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>;
}

export default Header;
