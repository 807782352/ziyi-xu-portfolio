import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import { useEffect, useState } from "react";
import PreLoading from "./pages/PreLoading";

export default function App() {
  const DELAY = 3000;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    const timerId = setTimeout(() => setIsLoading(false), DELAY);

    // clear timerId
    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timerId);
    };
  }, [isLoading]);

  return (
    <div>
      <PreLoading isLoading={isLoading} />
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" exact element={<HomeWithScroll />} />
        </Routes>
      </Router>
    </div>
  );
}

function HomeWithScroll() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // depends on location to make sure rerender every time the URL changes

  return <Home />;
}
