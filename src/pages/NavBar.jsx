import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinkItem from "../features/Navbar/NavLinkItem";
import MenuOverlay from "../features/Navbar/MenuOverlay";
import Button from "../ui/Button";
import DownloadButton from "../ui/DownloadButton";

export default function NavBar() {
  const navLinks = [
    {
      url: "#about",
      title: "About",
      id: "1",
    },
    {
      url: "#skill",
      title: "Skill",
      id: "2",
    },
    {
      url: "#milestone",
      title: "Milestone",
      id: "4",
    },
    {
      url: "#project",
      title: "Project",
      id: "3",
    },
    {
      url: "#activity",
      title: "Activity",
      id: "5",
    },
    {
      url: "#contact",
      title: "Contact",
      id: "6",
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // fixed the navbar during window scrolling
    <nav
      className={` container fixed
    left-0 right-0 top-0 z-10 z-[9999] mx-auto bg-slate-900 px-8 py-5 ${
      navbarOpen ? "rounded-[44px] opacity-100" : "rounded-full opacity-90"
    } `}
    >
      <div
        className="   flex  
      items-center justify-between  text-slate-100 "
      >
        <Link to="/#home">
          <span className="font-maoti yellow-red  bg-clip-text text-3xl text-transparent md:text-[36px] lg:text-[48px]">
            熠
          </span>
        </Link>

        <div className="mobile-menu md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center rounded px-3 py-3 text-slate-200 hover:border hover:border-white hover:text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center rounded px-3 py-3 text-slate-200 hover:border hover:border-white hover:text-white "
            >
              <span className="material-symbols-outlined ">menu</span>
            </button>
          )}
        </div>

        {!navbarOpen && (
          <div className="menu hidden md:block">
            <ul className="flex items-center p-4 uppercase md:flex-row md:space-x-2  md:p-0 ">
              {navLinks.map((item) => {
                return (
                  <NavLinkItem
                    url={item.url}
                    title={item.title}
                    key={item.id}
                  />
                );
              })}
            </ul>
          </div>
        )}

        <div className="hidden lg:block ">
          <Button type="primary-slate-800">
            <DownloadButton />
          </Button>
        </div>
      </div>

      {navbarOpen && <MenuOverlay menuItems={navLinks} />}
    </nav>
  );
}
