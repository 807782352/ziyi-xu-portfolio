import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Education from "./pages/Education";
import Activity from "./pages/Activity";
import Contact from "./pages/Contact";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skill",
          element: <Skill />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/activity",
          element: <Activity />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
