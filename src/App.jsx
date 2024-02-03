import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Calendar from "./views/Calendar&Activities";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
