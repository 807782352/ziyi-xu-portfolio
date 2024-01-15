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
    left-0 right-0 top-0 z-[9990] mx-auto bg-slate-900 px-8 py-2 ${
      navbarOpen ? "rounded-lg opacity-100 rounded-t-none" : "rounded-[28px] opacity-90 rounded-t-none"
    } `}
    >
      <div
        className="   flex  
      items-center justify-between  text-slate-100 "
      >
        <Link to="/#home">
          <span className="yellow-red bg-clip-text  font-maoti text-[48px] text-transparent md:text-[40px] lg:text-[48px]">
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
              <span className="material-symbols-outlined text-[48px]">menu</span>
            </button>
          )}
        </div>

        {!navbarOpen && (
          <div className="menu hidden md:block">
            <ul className=" flex items-center px-4 uppercase md:flex-row md:space-x-2  md:p-0 ">
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
