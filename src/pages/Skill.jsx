import { useState, useTransition } from "react";
import SkillItem from "../features/Skill/SkillItem";
import SectionHeader from "../ui/SectionHeader";
import TabButton from "../ui/TabButton";

const SKILL_DATA = [
  {
    title: "Python",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
    categories: ["all",  "language", "machine-learning", "frontend"],
    id: "001",
  },
  {
    title: "Java",
    imgUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
    categories: ["all",  "language", "backend"],
    id: "002",
  },
  {
    title: "React",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    categories: ["all",  "library", "frontend"],
    id: "003",
  },
  {
    title: "JavaScript",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
    categories: ["all",  "language", "frontend", "backend"],
    id: "004",
  },
  {
    title: "Vue",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png",
    categories: ["all",  "library", "frontend"],
    id: "005",
  },
  {
    title: "C++",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    categories: ["all",  "language", "backend"],
    id: "006",
  },
  {
    title: "MySQL",
    imgUrl:
      "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png",
    categories: ["all",  "tool", "backend", "database"],
    id: "007",
  },
  {
    title: "Redis",
    imgUrl:
      "https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg",
    categories: ["all",  "tool", "backend", "database"],
    id: "008",
  },
  {
    title: "Git",
    imgUrl: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
    categories: ["all",  "tool", "frontend", "backend"],
    id: "009",
  },
  {
    title: "HTML",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png",
    categories: ["all",  "language", "frontend"],
    id: "010",
  },
  {
    title: "CSS",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
    categories: ["all",  "language", "frontend"],
    id: "011",
  },
  {
    title: "SpringBoot",
    imgUrl:
      "https://www.yugabyte.com/wp-content/uploads/2021/08/spring-boot-1.png",
    categories: ["all",  "framework", "backend"],
    id: "012",
  },
  {
    title: "Spring",
    imgUrl: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
    categories: ["all",  "framework", "backend"],
    id: "013",
  },
  {
    title: "React-Redux",
    imgUrl: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    categories: ["all",  "library", "frontend"],
    id: "014",
  },
  {
    title: "React-Router",
    imgUrl: "https://www.svgrepo.com/show/354262/react-router.svg",
    categories: ["all",  "library", "frontend"],
    id: "015",
  },
  {
    title: "Mybatis-Plus",
    imgUrl: "https://mybatis.plus/img/logo.png",
    categories: ["all",  "library", "backend"],
    id: "016",
  },
  {
    title: "Maven",
    imgUrl: "https://www.svgrepo.com/show/373829/maven.svg",
    categories: ["all",  "library", "backend"],
    id: "017",
  },
  {
    title: "Node.js",
    imgUrl: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
    categories: ["all",  "library", "backend"],
    id: "018",
  },
  {
    title: "Bootstrap",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    categories: ["all",  "library", "backend"],
    id: "019",
  },
  {
    title: "Vite",
    imgUrl: "https://www.svgrepo.com/show/374167/vite.svg",
    categories: ["all",  "tool", "framework", "frontend"],
    id: "020",
  },
  {
    title: "Tailwind",
    imgUrl: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
    categories: ["all",  "library", "frontend"],
    id: "021",
  },
  {
    title: "Linux Commands",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1727px-Tux.svg.png",
    categories: ["all",  "language", "backend"],
    id: "022",
  },
  {
    title: "Pytorch",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png",
    categories: ["all",  "library", "ml"],
    id: "023",
  },
  {
    title: "Tensorflow",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/957px-Tensorflow_logo.svg.png",
    categories: ["all",  "library", "ml"],
    id: "024",
  },
  {
    title: "Numpy",
    imgUrl: "https://www.svgrepo.com/show/354127/numpy.svg",
    categories: ["all",  "library", "ml"],
    id: "025",
  },
  {
    title: "Pandas",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png",
    categories: ["all",  "library", "ml"],
    id: "026",
  },
  {
    title: "Matplotlib",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1024px-Matplotlib_icon.svg.png",
    categories: ["all",  "library", "ml"],
    id: "027",
  },
  {
    title: "Spring Cloud",
    imgUrl: "https://avatars.githubusercontent.com/u/8216893?s=200&v=4",
    categories: ["all",  "tool", "backend"],
    id: "028",
  },
  {
    title: "AWS",
    imgUrl:
      "https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-ptyrjxdo.png",
    categories: ["all",  "tool", "backend"],
    id: "029",
  },
];

const SKILL_TAB = [
  { id: "All", category: "all" },
  { id: "Frontend", category: "frontend" },
  { id: "Backend", category: "backend" },
  { id: "Language", category: "language" },
  { id: "Library", category: "library" },
  { id: "Framework", category: "framework" },
  { id: "Machine Learning", category: "ml" },
  { id: "Tool", category: "tool" },
];

export default function Skill() {
  const [tab, setTab] = useState("all");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (category) => {
    startTransition(() => {
      setTab(category);
    });
  };

  return (
    <div className="container mx-auto mt-32">
      <SectionHeader title="skills" subtitle="A list of my skills and tools" />

      <div className="mt-24 flex items-center space-x-4 justify-start">
        {SKILL_TAB.map((item) => (
          <TabButton
            key={item.id}
            active={tab === item.category}
            selectTab={() => handleTabChange(item.category)}
          >
            {item.id}
          </TabButton>
        ))}
      </div>

      
      <ul className="mt-8 grid grid-cols-3 gap-6 md:grid-cols-6 ">
        {SKILL_DATA.filter((item) => item.categories.find((category) => category === tab))?.map(el => (
          <SkillItem skill={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
}
