export default function MileStoneItem({ mileStoneItem, index }) {
  const { time, title, venue, content, imgUrl } = mileStoneItem;

  const strList = content.split("\n");

  let containerStyle = "col-span-4 col-start-1";
  let borderStyle =
    "rounded-2xl md:rounded-tr-none border-2 border-orange-400 bg-slate-900 px-5 py-5";

  if (index % 2 !== 0) {
    containerStyle = "col-span-4 col-start-6";
    borderStyle =
      "rounded-2xl md:rounded-tl-none border-2 border-orange-400 bg-slate-900 px-5 py-5";
  }

  return (
    <div className="grid px-2 py-2 md:grid-cols-9 md:py-0">
      {/* right container style */}
      {index % 2 !== 0 && <VerticalLine imgUrl={imgUrl} />}

      <div id="milestone-container" className={containerStyle}>
        <span className="mx-4 my-2 inline-block text-slate-300">📅 {time}</span>

        <div id="text-box" className={borderStyle}>
          <h2 className="text-xl font-bold ">{title}</h2>
          <span className="px-1 text-sm italic text-slate-300">📍 {venue}</span>
          <p className="mt-2 px-6 text-left text-slate-200">
            <ul className="list-disc">
              {strList.map((strItem, index) => (
                <li key={index}>{strItem}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>

      {/* left container style  */}
      {index % 2 === 0 && <VerticalLine imgUrl={imgUrl} />}
    </div>
  );
}

function VerticalLine({ imgUrl }) {
  return (
    <div
      id="vertical-timeline"
      className="hidden md:col-span-1 md:col-start-5 md:flex md:h-full md:w-full md:items-center md:justify-center"
    >
      <div className="h-full w-1 bg-orange-400"></div>
      <div
        className="absolute z-10 h-16 w-16 rounded-full border-2 border-orange-400 bg-white bg-contain bg-center bg-no-repeat transition delay-300 duration-300 ease-in-out hover:scale-150 max-lg:hidden"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
    </div>
  );
}
