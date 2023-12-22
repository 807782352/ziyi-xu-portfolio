import Button from "../../ui/Button";

export default function Card({ slide }) {
  console.log(slide);

  const { title, imgUrl, repoUrl, demoUrl, description } = slide;
  return (
    <div className=" rounded-3xl bg-slate-800 px-10 py-8">
      <div className="card-image flex justify-center ">
        <img src={imgUrl} alt={title} className="rounded-2xl" />
      </div>
      <div className="card-info mt-4 flex flex-col gap-4 text-white ">
        <h2 className="text-3xl font-extrabold uppercase">{title}</h2>
        <p className="">{description}</p>
        <p className="">Tech Stack: JavaScript, React, Java</p>
      </div>
      <div className="card-link-buttons flex justify-between mt-6">
        <Button type="primary-slate-800" >Code</Button>
        <Button type="horrow-slate-800" >Demo</Button>
      </div>
    </div>
  );
}
