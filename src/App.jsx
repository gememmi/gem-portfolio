import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Contact from "./components/Contact";
import ProjectContainer from "./components/ProjectContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectContainer />} />
        
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
