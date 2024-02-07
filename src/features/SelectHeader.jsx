import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";

const selectHeader = () => {
  if (window.innerWidth < 1024) {
    return <MobileHeader />;
  } else {
    return <DesktopHeader />;
  }
};

export default selectHeader;