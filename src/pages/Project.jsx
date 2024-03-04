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
      "Leaflet",
    ],
    description:
      "A team of six developers leveraged front-end and back-end separation techniques to create a travel website within a four-month agile development cycle. The project utilized React and Material UI for the front end to ensure a responsive and intuitive user interface, while the backend was developed with SpringBoot for efficient data handling and scalability. Hosted on AWS EC2, the website provides a platform for travelers to share experiences, post travel guides, and engage in discussions, thereby facilitating a community-driven exchange of travel insights and recommendations.",
  },

  {
    title: "mec-covid-tracker",
    imgUrl: "/images/project-covid-tracker.png",
    repoUrl: "https://github.com/807782352/mec-covid-tracker-restored",
    demoUrl: "https://mec-covid-tracker-restored.vercel.app/",
    techs: ["JavaScript", "React", "CSS", "HTML", "MaterialUI", "Leaflet"],
    description:
      "This is a restoration of our previous second-prize-winning project in the MEC competition (the original code was damaged). The project's purpose is to monitor COVID globally in real-time, presenting data through images and tables. The data source is https://disease.sh/.",
  },

  {
    title: "reggie-takeout",
    imgUrl: "/images/project-reggie.png",
    repoUrl: "https://github.com/807782352/reggie_food_delivery",
    demoUrl: "",
    techs: [
      "Vue",
      "Java",
      "JavaScript",
      "SpringBoot",
      "MyBatis-Plus",
      "SSM",
      "MySQL",
      "Maven",
    ],
    description:
      "Developed the Reggie Takeaway platform with a SpringBoot-built merchant management and client ordering system, utilizing MySql for data consistency and Mybatis-Plus for object-relational mapping. Implemented pagination for enhanced database queries and integrated Aliyun SMS for secure two-factor authentication, streamlining both user experience and operational efficiency in a comprehensive full-stack design.",
  },

  {
    title: "Hand Motion Supporting Device",
    imgUrl: "/images/project-hmsd.jpg",
    repoUrl: "https://github.com/807782352/Codes_Projects/tree/main/capstone_HMSD",
    demoUrl: "https://www.youtube.com/watch?v=iIK4KwtpoCI",
    techs: [
      "Python",
      "MySQL",
      "Arduino C++",
      "Autodesk Inventor"
    ],
    description:
      "Led the development of a sensor-equipped rehabilitation glove to aid in finger training, with customizable speed and force settings. Crafted a Python Tkinter interface for enhanced user interaction and managed data via MySQL for effective storage. Utilized Python's Serial library and MySQL connectivity for efficient data exchange between the Python interface and Arduino-controlled electromechanical systems, enabling precise finger movement adjustments based on sensor feedback.",
  },

  {
    title: "popcorn-movie",
    imgUrl: "/images/project-movie.png",
    repoUrl: "https://github.com/807782352/popcorn-movie",
    demoUrl: "https://popcorn-movie-eight.vercel.app/",
    techs: ["JavaScript", "React", "CSS", "HTML"],
    description:
      "Developed a user-friendly movie search and rating website, leveraging the OMDB API for extensive movie data access. Utilized React's useState and useEffect hooks for state management and side effects handling, ensuring a dynamic and responsive user experience.",
  },
  {
    title: "react-quiz",
    imgUrl: "/images/project-react-quiz.png",
    repoUrl: "https://github.com/807782352/react-quiz",
    demoUrl: "https://react-quiz-three-neon.vercel.app/",
    techs: ["JavaScript", "React", "CSS", "HTML", "React Context"],
    description:
      "Led the development of an interactive quiz website using React, featuring a comprehensive question bank, a mini scoring system, and a timer. Implemented advanced React features and hooks such as createContext, useContext, useEffect, and useReducer to manage global state, side effects, and complex state logic efficiently.",
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
      "Developed a dynamic pizza ordering web application, providing a seamless user experience from menu browsing to order checkout. Leveraged a modern tech stack including React, Redux, React Router Dom, and TailwindCSS, coupled with efficient data fetching techniques to ensure real-time menu updates and order processing.",
  },
  {
    title: "worldwise tracker",
    imgUrl: "/images/project-worldwise.png",
    repoUrl: "https://github.com/807782352/react-worldwise",
    demoUrl: "https://react-worldwise-rosy.vercel.app/",
    techs: ["JavaScript", "React", "Tailwind CSS", "HTML", "React Context"],
    description:
      "Developed an interactive world map application enabling users to log visits to different countries and regions, add personal notes like a diary, and pinpoint their current location. Implemented robust authentication to ensure user data privacy. Utilized a modern JavaScript stack including React, Leaflet for mapping, and Axios for API interactions, useContext for global state management.",
  },
  {
    title: "redux-shopping",
    imgUrl: "/images/project-redux-shopping.png",
    repoUrl: "https://github.com/807782352/redux-shopping",
    demoUrl: "https://redux-shopping-beta.vercel.app/",
    techs: ["JavaScript", "React", "CSS", "HTML", "BootStrap", "React-Redux"],
    description:
      "Developed a compact e-commerce website featuring global state management with Redux, enabling seamless shopping experiences. This project showcased advanced state handling techniques and integrated key functionalities such as product listings and a shopping cart.",
  },
];

export default function Project() {
  return (
    <div className="container mx-auto mt-32 ">
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
