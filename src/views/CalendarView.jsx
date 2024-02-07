import Footer from "../components/Footer";
import MyCalendar from "../components/Calendar";
import selectHeader from "../features/SelectHeader";

const CalendarView = () => {
  return (
    <>
      {selectHeader()}
      <MyCalendar />
      <Footer />
    </>
  );
};

export default CalendarView;