import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Card from "../features/Project/Card";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

const PROJECTS_DATA = [
  {
    title: "popcorn-movie",
    imgUrl: "/images/project-movie.png",
    repoUrl: "https://github.com/807782352/popcorn-movie",
    demoUrl: "https://popcorn-movie-eight.vercel.app/",
    techs: ["JavaScript", "React", "CSS", "HTML"],
    description:
      "Project learned and developed from Jonas Schmedtmann in his bootcamp: The Ultimate React Course 2024: React, Redux & More",
  },
  {
    title: "react-quiz",
    imgUrl: "/images/project-react-quiz.png",
    repoUrl: "https://github.com/807782352/react-quiz",
    demoUrl: "https://react-quiz-three-neon.vercel.app/",
    techs: ["JavaScript", "React", "CSS", "HTML", "React Context"],
    description:
      "Project learned and developed from Jonas Schmedtmann in his bootcamp: The Ultimate React Course 2024: React, Redux & More",
  },
  {
    title: "fast pizza",
    imgUrl: "/images/project-pizza.png",
    repoUrl: "https://github.com/807782352/fast-react-pizza",
    demoUrl: "https://fast-react-pizza-chi.vercel.app/",
    techs: [
      "JavaScript",
      "React",
      "React Router",
      "React Redux",
      "Tailwind CSS",
      "HTML",
    ],
    description:
      "Project learned and developed from Jonas Schmedtmann in his bootcamp: The Ultimate React Course 2024: React, Redux & More",
  },
  {
    title: "worldwise tracker",
    imgUrl: "/images/project-worldwise.png",
    repoUrl: "https://github.com/807782352/react-worldwise",
    demoUrl: "https://react-worldwise-rosy.vercel.app/",
    techs: ["JavaScript", "React", "Tailwind CSS", "HTML", "React Context"],
    description:
      "Project learned and developed from Jonas Schmedtmann in his bootcamp: The Ultimate React Course 2024: React, Redux & More",
  },
  {
    title: "tripedia",
    imgUrl: "/images/project-tripedia.png",
    repoUrl:
      "https://github.com/807782352/Codes_Projects/tree/main/Tripedia-main",
    demoUrl: "",
    techs: [
      "JavaScript",
      "React",
      "CSS",
      "HTML",
      "MaterialUI",
      "Java",
      "SpringBoot",
      "MySQL",
      "AWS",
    ],
    description:
      "Project designed and developed by a group of 6 in course ECE650 at the University of Waterloo.",
  },
];

export default function Project() {
  return (
    <div className="container mx-auto mt-32 " >
      <SectionHeader
        title="Project"
        subtitle="A list of projects I studied or worked on"
        id="project"
      />

      <div className="mt-16">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
            el: ".custom-pagination",
          }}
          className="swiper_container"
          navigation={{
            prevEl: ".left-button",
            nextEl: ".right-button",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {PROJECTS_DATA.map((slide) => (
            <SwiperSlide key={slide.title}>
              <Card slide={slide} />
            </SwiperSlide>
          ))}

          <div className="slider-controller flex items-center justify-around">
            <div className="left-button">
              <Button type="left" />
            </div>
            <div className="custom-pagination"></div>
            <div className="right-button">
              <Button type="right" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
