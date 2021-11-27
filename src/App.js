import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Headers from "./Components/Navbar/Headers";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Course from "./Components/Course/Course";

function App() {
  return (
    <header>
      <Headers />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="course/:id" element={<Course />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer />
    </header>
  );
}

export default App;
