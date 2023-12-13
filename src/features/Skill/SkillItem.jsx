export default function SkillItem({ skill }) {
  const { title, imgUrl } = skill;

  return (
    <li className="flex flex-col flex-wrap items-center justify-between text-white bg-slate-900 py-10">
      <img src={imgUrl} alt={title} className="w-22 h-20 brightness-110 " />
      <span className="font-bold">{title}</span>
    </li>
  );
}
