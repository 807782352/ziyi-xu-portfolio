import { useEffect, useState, useTransition } from "react";
import SkillItem from "../features/Skill/SkillItem";
import SectionHeader from "../ui/SectionHeader";
import TabButton from "../ui/TabButton";

const SKILL_DATA = [
  {
    title: "Java",
    imgUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
    categories: ["all", "language", "backend"],
    id: "002",
    color: "#ffa71f",
  },
  {
    title: "JavaScript",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
    categories: ["all", "language", "frontend", "backend"],
    id: "004",
    color: "#fff155",
  },
  {
    title: "Python",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
    categories: ["all", "language", "machine-learning", "frontend"],
    id: "001",
    color: "#3d83b9",
  },
  {
    title: "C++",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    categories: ["all", "language", "backend"],
    id: "006",
    color: "#70a9e7",
  },
  {
    title: "HTML",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png",
    categories: ["all", "language", "frontend"],
    id: "010",
    color: "#fa572a",
  },
  {
    title: "CSS",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
    categories: ["all", "language", "frontend"],
    id: "011",
    color: "#2453fb",
  },
  {
    title: "React",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    categories: ["all", "library", "frontend"],
    id: "003",
    color: "#6af1ff",
  },

  {
    title: "Vue",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png",
    categories: ["all", "framework", "frontend"],
    id: "005",
    color: "#45cc90",
  },

  {
    title: "MySQL",
    imgUrl:
      "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png",
    categories: ["all", "tool", "backend", "database"],
    id: "007",
    color: "#4c85b1",
  },
  {
    title: "Redis",
    imgUrl:
      "https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg",
    categories: ["all", "tool", "backend", "database"],
    id: "008",
    color: "#da352f",
  },
  {
    title: "Git",
    imgUrl: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
    categories: ["all", "tool", "frontend", "backend"],
    id: "009",
    color: "#ff5838",
  },

  {
    title: "SpringBoot",
    imgUrl:
      "https://www.yugabyte.com/wp-content/uploads/2021/08/spring-boot-1.png",
    categories: ["all", "framework", "backend"],
    id: "012",
    color: "#72d24a",
  },
  {
    title: "Spring",
    imgUrl: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
    categories: ["all", "framework", "backend"],
    id: "013",
    color: "#72d24a",
  },
  {
    title: "React-Redux",
    imgUrl: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    categories: ["all", "library", "frontend"],
    id: "014",
    color: "#8251cf",
  },
  {
    title: "React-Router",
    imgUrl: "https://www.svgrepo.com/show/354262/react-router.svg",
    categories: ["all", "library", "frontend"],
    id: "015",
    color: "#e5031d",
  },
  {
    title: "Mybatis-Plus",
    imgUrl: "https://mybatis.plus/img/logo.png",
    categories: ["all", "library", "backend"],
    id: "016",
    color: "#259dff",
  },
  {
    title: "Maven",
    imgUrl: "https://www.svgrepo.com/show/373829/maven.svg",
    categories: ["all", "library", "backend"],
    id: "017",
    color: "#f45f30",
  },
  {
    title: "Node.js",
    imgUrl: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
    categories: ["all", "library", "backend"],
    id: "018",
    color: "#91e12d",
  },
  {
    title: "Bootstrap",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    categories: ["all", "library", "backend"],
    id: "019",
    color: "#8322ff",
  },
  {
    title: "Vite",
    imgUrl: "https://www.svgrepo.com/show/374167/vite.svg",
    categories: ["all", "tool", "framework", "frontend"],
    id: "020",
    color: "#ffdf27",
  },
  {
    title: "Tailwind",
    imgUrl: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
    categories: ["all", "library", "frontend"],
    id: "021",
    color: "#1ccdcb",
  },
  {
    title: "Linux Commands",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1727px-Tux.svg.png",
    categories: ["all", "language", "backend"],
    id: "022",
    color: "#ffffff",
  },
  {
    title: "Pytorch",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png",
    categories: ["all", "library", "ml"],
    id: "023",
    color: "#ff522c",
  },
  {
    title: "Tensorflow",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/957px-Tensorflow_logo.svg.png",
    categories: ["all", "library", "ml"],
    id: "024",
    color: "#ff9d21",
  },
  {
    title: "Numpy",
    imgUrl: "https://www.svgrepo.com/show/354127/numpy.svg",
    categories: ["all", "library", "ml"],
    id: "025",
    color: "#54bce4",
  },
  {
    title: "Pandas",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png",
    categories: ["all", "library", "ml"],
    id: "026",
    color: "#ffdf00",
  },
  {
    title: "Matplotlib",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1024px-Matplotlib_icon.svg.png",
    categories: ["all", "library", "ml"],
    id: "027",
    color: "#9b9b9b",
  },
  {
    title: "Spring Cloud",
    imgUrl: "https://avatars.githubusercontent.com/u/8216893?s=200&v=4",
    categories: ["all", "tool", "backend"],
    id: "028",
    color: "#76c542",
  },
  {
    title: "AWS",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
    categories: ["all", "tool", "backend"],
    id: "029",
    color: "#f4f6f9",
  },
  {
    title: "Angular",
    imgUrl: "https://web.dev/static/explore/angular/cover-wide.svg",
    categories: ["all", "framework", "frontend"],
    id: "030",
    color: "#e5031d",
  },
  {
    title: "TypeScript",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    categories: ["all", "language", "frontend"],
    id: "031",
    color: "#70a9e7",
  },
  {
    title: "Scikit-learn",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    categories: ["all", "ml"],
    id: "032",
    color: "#ff9d21",
  },
  {
    title: "Power BI",
    imgUrl:
      "data:image/jpeg;base64,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",
    categories: ["all", "ml"],
    id: "033",
    color: "#ff9d21",
  },
 {
    title: "Excel",
    imgUrl:
      "data:image/png;base64,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",
      categories: ["all", "ml"],
    id: "033",
    color: "#76c542",
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
      <SectionHeader
        title="skills"
        subtitle="A list of my skills and tools"
        id="skill"
      />

      <div className="mt-24 flex flex-wrap items-center justify-start gap-4">
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

      <ul className="mt-8 grid grid-cols-3  gap-4 md:grid-cols-6">
        {SKILL_DATA.filter((item) =>
          item.categories.find((category) => category === tab),
        )?.map((el) => (
          // Reset the animation (little influence in small projects)
          <SkillItem skill={el} key={tab + "-" + el.id} />
        ))}
      </ul>
    </div>
  );
}
