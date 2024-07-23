import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/main/AboutUs";
import Service from "./components/main/Service";
import Studies from "./components/main/Studies";
import Solution from "./components/main/Solution";
import Career from "./components/main/Career";
import ContactUs from "./components/main/ContactUs";
import Service1 from "./components/learnmore/Service1";
import Service2 from "./components/learnmore/Service2";
import Service3 from "./components/learnmore/Service3";
import Service4 from "./components/learnmore/Service4";
import Service5 from "./components/learnmore/Service5";
import Service6 from "./components/learnmore/Service6";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/service4" element={<Service4 />} />
        <Route path="/service5" element={<Service5 />} />
        <Route path="/service6" element={<Service6 />} />
      </Routes>
    </>
  );
}

export default App;
