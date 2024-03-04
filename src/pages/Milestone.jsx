import MileStoneItem from "../features/MileStone/MileStoneItem";
import SectionHeader from "../ui/SectionHeader";

const MILESTONE_DATA = [
  {
    title: "💻 Google - Internship",
    time: "Jun, 2022 - July, 2022",
    venue: "Remote",
    content:
      "As a part-time assistant who helped the leader to develope business requirements for a Rewards System by leveraging SpringBoot for application development. \n Integrated Eureka for service registration, enabling SpringBoot app deployment as a microservice in SpringCloud. \n Optimized user experience by incorporating Redis with Spring Cache, significantly reducing data retrieval time. \n Boosted system stability with a Bloom filter, cutting cache penetration risk in high-load scenarios with a error rate under 3%.",
    imgUrl:
      "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    id: "004",
  },
  {
    title: "🎓 University of Waterloo",
    time: "Sept, 2021 - Oct, 2022",
    venue: "Waterloo, ON, Canada",
    content:
      "Graduated from Master of Engineering - MEng, Electrical and Computer Engineering with GPA 91 out of 100. \n Specialized in the fields of software and machine learning. ",
    imgUrl:
      "https://i.pinimg.com/originals/90/19/17/901917f9b6e74d254525c3e37d3dd934.png",
    id: "002",
  },

  {
    title: "🤖 MAC RoboMaster Team",
    time: "Sept, 2020 - Aug, 2021",
    venue: "Hamilton, ON, Canada",
    content:
      "As a CV team member who was responsible for developing colour detection and number recognition algorithms in Python. \n Engineered OpenCV algorithms for color detection and LED-bar isolation on armor plates. \n Applied spatial analysis and template matching for precise number recognition. \n Enhanced visual output with annotated contours for easy verification. \n Represented McMaster University in RoboMaster 2021 Robotics Competition.",
    imgUrl: "https://macrobomaster.com/assets/img/logo.png",
    id: "003",
  },

  {
    title: "🎓 McMaster University",
    time: "Sept, 2017 - June, 2021",
    venue: "Hamilton, ON, Canada",
    content:
      "Graduated from Bachelor of Engineering - BE, Mechatronics Engineering with GPA 10.42 out of 12. \n Recieved the McMaster Honer Award (Level III) and the Dean's Honor List for 2017-2019 & 2020-2021.",
    imgUrl:
      "https://banner2.cleanpng.com/20180617/pt/kisspng-mcmaster-university-medical-centre-mcmaster-facult-5b25dcf5c693e8.5452324215292080538134.jpg",
    id: "001",
  },
];

export default function MileStone() {
  return (
    <section className="container mx-auto mt-32 text-white " >
      <SectionHeader
        title="MileStone"
        subtitle="Significant milestones in my life to date"
        id="milestone"
      />

      <div className="mt-20">
        {MILESTONE_DATA.map((mileStoneItem, index) => (
          <MileStoneItem
            mileStoneItem={mileStoneItem}
            index={index}
            key={mileStoneItem.id}
          />
        ))}
      </div>
    </section>
  );
}
