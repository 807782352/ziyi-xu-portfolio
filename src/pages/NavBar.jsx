import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ isNavbarOn }) {
  if (isNavbarOn) {
    return (
      <header
        className=" transition-all duration-1000
      fixed flex h-20 w-screen items-center justify-between
      rounded-full bg-slate-500 px-4 py-3 text-slate-200"
      >
        <Link to="/"> Ziyi Xu's Portfolio</Link>
        <div className="flex space-x-10 uppercase ">
          <Link
            to="/about"
            className="hover:border-b-2 hover:border-slate-200 hover:font-bold"
          >
            About
          </Link>
          <Link
            to="/skill"
            className="hover:border-b-2 hover:border-slate-200 hover:font-bold"
          >
            Skill
          </Link>
          <Link
            to="/project"
            className="hover:border-b-2 hover:border-slate-200 hover:font-bold"
          >
            Project
          </Link>
          <Link
            to="/education"
            className="hover:border-b-2 hover:border-slate-200 hover:font-bold"
          >
            Education
          </Link>
          <Link
            to="/activity"
            className="hover:border-b-2 hover:border-slate-200 hover:font-bold"
          >
            Activity
          </Link>
          <Link
            to="/contact"
            className="hover:border-b-2 hover:border-slate-200 hover:font-bold"
          >
            Contact
          </Link>
        </div>
        <button>Download CV</button>
      </header>
    );
  }

  return (
    <header
      className=" transition-all duration-1000
    fixed h-20 w-20 flex items-center justify-center 
    rounded-full bg-slate-500 px-4 py-3 text-slate-200"
    >
      <span className="material-symbols-outlined text-4xl">menu</span>
    </header>
  );
}
