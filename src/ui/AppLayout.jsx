import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar";

export default function AppLayout() {
  // const [isNavbarOn, setIsNavbarOn] = useState(true);

  // const handleScroll = (event) => {
  //   const scrollY = window.scrollY;
  //   const scrollDist = scrollY - event.target.scrollTop;

  //   console.log(scrollDist);

  //   if (scrollDist > 200) {
  //     setIsNavbarOn(false);
  //   } else {
  //     setIsNavbarOn(true);
  //   }
  // };

  return (
    <div className="overflow-auto">
      <NavBar />
    </div>
  );
}
