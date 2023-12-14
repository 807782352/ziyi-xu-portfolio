export default function SkillItem({ skill }) {
  const { title, imgUrl, color } = skill;

  // get dynamic styles from index.css file
  // NOTE: **TailwindCSS doesn't allow you to generate classes dynamically**.
  //        So use style to handle the problem instead
  const dynamicStyles = {
    '--gradient-start': 'black', // default starting color
    '--gradient-end': color || 'white', // default white color if no color provided
  };

  return (
    <li className="">
      <div className="skill-item" style={dynamicStyles}>
        <img
          src={imgUrl}
          alt={title}
          className="z-20 h-20 w-auto brightness-110"
        />
        <span className="z-20 text-center text-base font-bold leading-tight text-slate-100 md:text-sm lg:text-lg">
          {title}
        </span>
      </div>
    </li>
  );
}
