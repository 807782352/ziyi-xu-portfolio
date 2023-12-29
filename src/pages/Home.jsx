import About from "./About";
// import Activity from "./Activity";
import HeroSection from "./HeroSection";
import MileStone from "./Milestone";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col bg-slate-950" id="home">
      <div className="container mx-auto w-10/12 mt-[100px] flex flex-col items-center justify-around gap-[100px] px-6 py-20">
        <HeroSection />
        <About />
        <Skill />
        <MileStone />
        <Project />
        {/* <Activity /> */}
        <Contact />
      </div>
    </main>
  );
}
