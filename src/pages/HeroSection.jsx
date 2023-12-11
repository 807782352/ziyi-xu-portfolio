import { TypeAnimation } from "react-type-animation";
import myImage from "/public/images/self-image.jpg";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8 lg:place-self-start ">
          <h1 className="mb-6 text-5xl  font-extrabold text-slate-100 lg:text-6xl">
            <span className="yellow-red bg-clip-text text-transparent">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ziyi Xu",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full-stack Web Developer",
                1000,
                "Software Engineer",
                1000,
                "interested in coding",
                1000,
                "seeking for a job",
                1000,
              ]}
              wrapper="span"
              style={{ fontSize: "0.8em" }}
              speed={20}
              repeat={0}
            />
          </h1>
          <p className=" text-lg text-slate-300 md:text-lg lg:text-xl">
            Welcome to my <span className="highlight">protfolio</span>! My name
            is <span className="highlight">Ziyi Xu</span>. I'm a dedicate and
            experienced <span className="highlight">full-stack</span> developer
            with a unique journey that began in the intricacies of{" "}
            <span className="highlight">back-end</span> technology and expanded
            to the creative realm of{" "}
            <span className="highlight">front-end</span> development.
          </p>

          <div className="flex justify-around lg:justify-start mt-4 lg:mt-6">
            <button className=" yellow-red w-40  mr-4 rounded-full px-6 font-semibold text-black ">
              Hire Me
            </button>
            <button className="yellow-red  w-40  mr-4 font-semibold  rounded-full px-1 py-1 text-white">
              <span className="block rounded-full  bg-black px-5 py-2  ">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 place-self-center lg:col-start-10 lg:col-end-13">
          <img
            src={myImage}
            alt="hero image"
            width={300}
            height={300}
            className="rounded-full text-slate-300"
          />
        </div>
      </div>
    </section>
  );
}
