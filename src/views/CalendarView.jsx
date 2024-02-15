import Footer from "../components/Footer";
import MyCalendar from "../components/Calendar";
import selectHeader from "../features/SelectHeader";

const CalendarView = () => {
  return (
    <>
      {selectHeader()}
      <main>
        <MyCalendar />
      </main>
      <Footer />
    </>
  );
};

export default CalendarView;