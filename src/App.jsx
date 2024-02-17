import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import CalendarView from "./views/CalendarView";
import Team from "./views/Team";
import Gallery from "./views/Gallery";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
