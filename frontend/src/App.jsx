import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
};

export default App;
