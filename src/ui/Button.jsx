export default function Button({ type, children, onClick, addClass}) {
  const BASE_COLOR_STYLE =
    "yellow-red rounded-full font-semibold cursor-pointer";

  const BASE_ARROW_STYLE =
    "cursor-pointer material-symbols-outlined rounded-full bg-inherit p-1 text-[40px] text-slate-100 shadow hover:bg-gray-900  ";

  if (type === "primary-full") {
    const primaryStyle =
      BASE_COLOR_STYLE +
      " mr-4  w-full mb-4 text-black px-6 py-3 sm:mb-0 sm:py-0";
    return <button className={primaryStyle}>{children}</button>;
  }

  if (type === "primary-slate-800") {
    const primaryStyle =
      BASE_COLOR_STYLE +
      " inline-block rounded-lg text-slate-800 px-5 py-3 sm:mb-0 ";
    return <button className={primaryStyle}>{children}</button>;
  }

  if (type === "horrow-full") {
    const horrowStyle = BASE_COLOR_STYLE + "mr-4  w-full text-white px-1 py-1";
    return (
      <button className={horrowStyle}>
        <span className="block rounded-full bg-black px-5 py-2">
          {children}
        </span>
      </button>
    );
  }

  if (type === "horrow-slate-800") {
    const horrowStyle =
      BASE_COLOR_STYLE + " rounded-lg w-fit text-white px-1 py-1 ";
    return (
      <button className={horrowStyle}>
        <span className="block rounded-lg bg-slate-800 px-4 py-2">{children}</span>
      </button>
    );
  }

  if (type === "left") {
    return <span className={BASE_ARROW_STYLE}>chevron_left</span>;
  }
  if (type === "right") {
    return <span className={BASE_ARROW_STYLE}>chevron_right</span>;
  }

  return null;
}
