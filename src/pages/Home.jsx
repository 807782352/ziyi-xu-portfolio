import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col bg-slate-950 ">
      <div className="container mx-auto px-6 py-20">
        <HeroSection />
      </div>
    </main>
  );
}
