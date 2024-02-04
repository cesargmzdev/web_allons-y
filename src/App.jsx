import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import CalendarView from "./views/CalendarView";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
