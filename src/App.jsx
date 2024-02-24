import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import CalendarView from "./views/CalendarView";
import Team from "./views/Team";
import Gallery from "./views/Gallery";
import History from "./views/History";
import Contact from "./views/Contact";
import Join from "./views/Join";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
