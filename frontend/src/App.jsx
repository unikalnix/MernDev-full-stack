import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import BusinessCard from "./pages/BusinessCard/BusinessCard";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
 
  return (
    <div>
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<Home setActiveSection={setActiveSection}/>} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/card" element={<BusinessCard />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
