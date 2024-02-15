import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import CalendarView from "./views/CalendarView";
import Team from "./views/Team";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
