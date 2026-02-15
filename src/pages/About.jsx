import { useState, useTransition } from "react";
import MyImage from "/images/hero-image.jpg";
import TabButton from "../ui/TabButton";
import SectionHeader from "../ui/SectionHeader";

const TAB_DATA = [
  {
    id: "simplified",
    title: "Simplified",
    content: (
      <>
        <p>
          Hello, my name is Ziyi Xu. I am currently a Master of Management
          Analytics candidate at the University of Toronto. Before transitioning
          into analytics, I worked as a software developer with an engineering
          background.
        </p>
        <p>
          My interests gradually shifted toward machine learning and data-driven
          decision-making. I am passionate about building predictive models that
          uncover hidden patterns in data and support real-world business
          strategy.
        </p>
        <p>
          For my work experience, I have collaborated with the BMO Marketing
          team to develop Customer Lifetime Value (CLV) and persona segmentation
          models, and worked at Nanjing Yuanquan Software Technology Co. to
          build an LLM-based AI agent.
        </p>
        <p>
          Beyond academics and professional work, I enjoy badminton, chess,
          basketball, and esports.
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
          Hello, my name is Ziyi Xu. I am currently pursuing a Master of
          Management Analytics at the University of Toronto. My academic
          background is rooted in engineering. I completed my undergraduate
          degree in Mechatronics Engineering and later earned a Master's degree
          in Electrical and Computer Engineering. These experiences strengthened
          my foundation in mathematics, algorithms, and system design.
        </p>
        <p>
          Before transitioning into analytics, I worked as a software developer.
          Through this experience, I developed a solid understanding of backend
          systems, algorithm implementation, and structured programming. I am
          proficient in Python, Java, JavaScript, and C/C++, and have experience
          working with SQL and machine learning frameworks.
        </p>
        <p>
          While designing on CRM systems for my aunt's restaurant, I began to
          recognize how important data was to every business decision. Beyond
          building features and maintaining systems, I became curious about the
          patterns hidden within the data itself. With the rapid development of
          AI and my growing interest in machine learning, I started to explore
          how data could be used not just to build systems, but to drive smarter
          decisions. I found the process of uncovering insights and translating
          them into actionable strategies both intellectually challenging and
          genuinely exciting.
        </p>
        <p>
          During my time in the MMA program, I worked with the BMO Marketing
          team to develop Customer Lifetime Value (CLV) and persona segmentation
          models. We built a predictive framework to forecast 12-month revenue
          and used segmentation techniques to support targeted marketing
          strategies and campaign planning. This project strengthened my ability
          to connect modeling results with practical business applications.
        </p>
        <p>
          In addition, I worked at Nanjing Yuanquan Software Technology Co.,
          where I helped develop an LLM-based customer service agent. The system
          was designed to automate user inquiries and retrieve relevant
          information efficiently through natural language processing. This
          experience deepened my understanding of large language models and
          their real-world deployment.
        </p>
        <p>
          Outside of academics and work, I enjoy badminton, chess, basketball,
          and esports. I appreciate the strategy and discipline behind these
          activities, which also influence the way I approach challenges in my
          professional life.
        </p>
        <p>
          I hope to continue growing at the intersection of technology and
          analytics, contributing to projects where data can create meaningful
          and measurable impact.
        </p>
      </>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("simplified");

  const handleTabChange = (id) => setTab(id);

  return (
    <section className="container  mx-auto mt-20 text-white">
      <SectionHeader
        title="About Me"
        subtitle="A breif intro at my journey in tech"
        id="about"
      />

      <div className="grid grid-flow-row place-items-center gap-4 md:mt-16 md:grid-cols-12 md:grid-rows-none  md:place-items-start">
        <img
          src={MyImage}
          alt="Ziyi Xu's Image"
          className="mt-14 w-[350px]  md:col-start-2 md:col-end-5 md:w-[300px]"
        />

        <div className="mt-6 md:col-start-6 md:col-end-12 md:mt-0">
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
