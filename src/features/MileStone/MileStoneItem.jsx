export default function MileStoneItem({ mileStoneItem, index }) {
  const { time, title, venue, content, imgUrl } = mileStoneItem;

  const strList = content.split("\n");
  console.log(strList);

  let containerStyle = "col-span-4 col-start-1";
  let borderStyle =
    "rounded-2xl rounded-tr-none border-2 border-orange-400 bg-slate-900 px-5 py-5";

  if (index % 2 !== 0) {
    containerStyle = "col-span-4 col-start-6";
    borderStyle =
      "rounded-2xl rounded-tl-none border-2 border-orange-400 bg-slate-900 px-5 py-5";
  }

  return (
    <div className="grid grid-cols-9 px-2">
      {/* right container style */}
      {index % 2 !== 0 && (
        <div
          id="vertical-timeline"
          className="col-span-1 col-start-5 flex h-full w-full items-center justify-center"
        >
          <div className="h-full w-1 bg-orange-400"></div>
          <div
            className="absolute z-10 h-16 w-16 rounded-full border-2 border-orange-400 bg-white bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
        </div>
      )}

      <div id="milestone-container" className={containerStyle}>
        <span className="mx-4 my-2 inline-block text-slate-300">📅 {time}</span>

        <div id="text-box" className={borderStyle}>
          <h2 className="text-xl font-bold ">{title}</h2>
          <span className="text-sm italic text-slate-300 px-1">📍 {venue}</span>
          <p className="mt-2 text-left text-slate-200 px-6">
            <ul className="list-disc">
                {strList.map((strItem,index) => (
                    <li key={index}>{strItem}</li>
                ))}
            </ul>
          </p>
        </div>
      </div>

      {/* left container style  */}
      {index % 2 === 0 && (
        <div
          id="vertical-timeline"
          className="col-span-1 col-start-5 flex h-full w-full items-center justify-center"
        >
          <div className="h-full w-1 bg-orange-400"></div>
          <div
            className="absolute z-10 h-16 w-16 rounded-full border-2 border-orange-400 bg-white bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
        </div>
      )}
    </div>
  );
}
