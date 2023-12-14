export default function SkillItem({ skill }) {
  const { title, imgUrl, color } = skill;

  return (
    // TODO: Change the className into a variable, and then assign to the className
    <li className="">
      {console.log(
        `relative flex h-full w-full flex-col  flex-wrap  items-center justify-around gap-5 rounded-3xl  py-8  before:absolute before:inset-1 before:z-10 before:rounded-3xl before:bg-slate-900 before:content-[''] after:absolute after:-top-full after:left-[-100%] after:h-[300%] after:w-[300%] after:animate-fullSpin  after:content-[''] after:bg-[conic-gradient(black,black,${color || "white"})] overflow-hidden`,
      )}
      <div
        className={`relative flex h-full w-full flex-col  flex-wrap  items-center justify-around gap-5 rounded-3xl  py-8  before:absolute before:inset-1 before:z-10 before:rounded-3xl before:bg-slate-900 before:content-[''] after:absolute after:-top-full after:left-[-100%] after:h-[300%] after:w-[300%] after:animate-fullSpin  after:content-[''] after:bg-[conic-gradient(black,black,${color || "white"})] overflow-hidden`}
      >
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

// after:bg-gradient-to-r  after:from-black after:via-black after:to-yellow-500

//
