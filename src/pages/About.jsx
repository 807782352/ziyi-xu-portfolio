import { useState, useTransition } from "react";
import MyImage from "/public/images/hero-image.jpg";
import TabButton from "../ui/TabButton";

const TAB_DATA = [
  {
    id: "simplified",
    title: "Simplified",
    content: (
      <>
        <p>
          Hello! I'm Ziyi Xu, a fresh graduate passionate with a deep interest
          in innovation and technological exploration. Drawn to the potential of
          the internet IT field, I chose to specialize in software during my
          university years. Over five years, I've honed my skills in software
          development, backend algorithms, front-end design, and machine
          learning, becoming proficient in languages like Java, JavaScript,
          Python, and C/C++.
        </p>
        <p>
          I have a sincere interest in design and programming, always eager to
          incorporate the latest technologies into my projects. I pay attention
          to detail, pursue an organized approach to programming, and use
          logical thinking to solve problems. I am a quick learner, able to
          swiftly adapt to new challenges. My team spirit, collaborative
          ability, and problem-solving skills have been acknowledged in various
          group projects by my teammates.
        </p>
        <p>
          With a blend of technical knowledge and a passion for innovation, I am
          excited to contribute to dynamic tech environments, bringing fresh
          perspectives and enthusiasm to each endeavor.
        </p>
      </>
    ),
  },
  {
    id: "detailed",
    title: "Detailed",
    content: (
      <>
        <p>
          Hello! I'm Ziyi Xu, a recent graduate with a keen interest in
          exploring and creating new things. From an early age, I've been
          fascinated by innovation and the hands-on process of bringing fresh
          ideas to life. This passion led me to pursue a career in the
          burgeoning field of Internet IT, where I majored in software-related
          studies.
        </p>
        <p>
          During my five years in university, I delved into various aspects of
          technology, including software development, backend algorithms,
          front-end design, and even machine learning. I have gained proficiency
          in programming languages such as Java, JavaScript, Python, and C/C++.
        </p>
        <p>
          Design, programming, and the application of advanced technologies in
          projects are what excite me the most. I eagerly look forward to new
          technological advancements and continuously strive to incorporate them
          into my work. I pride myself on my attention to detail, clarity in
          programming structure, and strong logical reasoning.
        </p>
        <p>
          I consider myself a quick learner, capable of rapidly acquiring new
          skills to achieve set goals. In the numerous group projects I've
          participated in, my teammates have consistently recognized my strong
          sense of responsibility, collaborative spirit, and problem-solving
          abilities.
        </p>
        <p>
          With a blend of technical expertise and a zeal for innovation, I am
          eager to contribute to and grow within dynamic tech environments,
          bringing fresh perspectives and enthusiasm to every project I
          undertake.
        </p>
      </>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("simplified");

  const handleTabChange = (id) => setTab(id);

  return (
    <section className="container mx-auto mt-20 text-white">
      <h2 className=" text-center">
        <span className="border-b-2 border-inherit border-orange-400 py-1 text-4xl font-bold uppercase tracking-[0.2em]">
          About Me
        </span>
      </h2>
      <h3 className="mt-4 text-center font-bold text-slate-300">
        A breif intro at my journey in tech
      </h3>

      <div className="grid grid-flow-row place-items-center gap-4 md:mt-16 md:grid-cols-12 md:grid-rows-none  md:place-items-start">
        <img
          src={MyImage}
          alt="Ziyi Xu's Image"
          className="mt-14 w-[200px]  md:col-start-2 md:col-end-5 md:w-[300px]"
        />

        <div className=" md:col-start-6 md:col-end-12">
          <div className="flex items-start justify-end">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                active={tab === item.id}
                selectTab={() => handleTabChange(item.id)}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 text-justify">
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
