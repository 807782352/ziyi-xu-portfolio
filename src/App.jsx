import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Activity from "./pages/Activity";
import Contact from "./pages/Contact";
import MileStone from "./pages/Milestone";
import NavBar from "./pages/NavBar";
import { useEffect } from "react";

export default function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" exact element={<HomeWithScroll />} />
      </Routes>

    </Router>
  );
}

function HomeWithScroll() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        
        element.scrollIntoView({behavior: 'smooth' });
      }
    }
  }, [location]); // depends on location to make sure rerender every time the URL changes

  return <Home />;
}
