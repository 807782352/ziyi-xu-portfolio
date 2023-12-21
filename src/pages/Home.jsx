import About from "./About";
import HeroSection from "./HeroSection";
import MileStone from "./Milestone";
import Project from "./Project";
import Skill from "./Skill";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col bg-slate-950" id="home">
      <div className="container mx-auto px-6 py-20">
        <HeroSection />
        <About />
        <Skill />
        <MileStone/>
        <Project />
      </div>
    </main>
  );
}
