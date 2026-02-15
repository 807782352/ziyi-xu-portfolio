import { TypeAnimation } from "react-type-animation";
import myImage from "/images/self-image.jpg";
import Button from "../ui/Button";
import DownloadButton from "../ui/DownloadButton";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(`/${url}`);
  };

  return (
    <section>
      <div className="mt-28 grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8 lg:place-self-start ">
          <h1 className="mb-6 text-5xl  font-extrabold text-slate-100 lg:text-6xl">
            <span className="yellow-red bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ziyi Xu",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Data Scientist",
                1000,
                "Data Analyst",
                1000,
                "Software Developer",
                1000,
                "interested in machine learning and AI",
                1000,
                "seeking for a job",
                1000,
              ]}
              wrapper="span"
              style={{ fontSize: "0.8em" }}
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg text-slate-300 md:text-lg lg:text-xl">
            Welcome to my <span className="highlight">portfolio</span>! My name
            is <span className="highlight">Ziyi Xu</span>. I am a{" "}
            <span className="highlight">data scientist</span> with a background
            in <span className="highlight">full-stack development</span>. I
            transitioned from building systems to designing predictive models
            and analytical solutions that support real-world business decisions.
          </p>

          <div className="mr-6 mt-4 sm:flex lg:mt-6">
            <Button
              type="primary-full"
              onClick={() => handleNavigate("#contact")}
            >
              Hire Me
            </Button>
            <Button type="horrow-full">
              <DownloadButton />
            </Button>
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
