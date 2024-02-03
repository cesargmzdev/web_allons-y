import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";
import Footer from "../components/Footer";
import MyCalendar from "../components/Calendar";

const selectHeader = () => {
  if (window.innerWidth < 1024) {
    return <MobileHeader />;
  } else {
    return <DesktopHeader />;
  }
};

const Calendar = () => {
  return (
    <>
      {selectHeader()}
      <MyCalendar />
      <Footer />
    </>
  );
};

export default Calendar;