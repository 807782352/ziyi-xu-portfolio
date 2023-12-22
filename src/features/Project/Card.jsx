import { Link, redirect } from "react-router-dom";
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";

export default function Card({ slide }) {
  console.log(slide);
  const { title, imgUrl, repoUrl, demoUrl, description, techs } = slide;

  return (
    <div className=" rounded-3xl bg-slate-800 px-10 py-8">
      <div className="card-image flex justify-center ">
        <img
          src={imgUrl}
          alt={title}
          className="rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="card-info my-6 flex flex-col gap-4 text-white ">
        <h2 className="text-3xl font-semibold uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-slate-300">{description}</p>
        <div className="">
          <span className="text-xl font-bold">Tech Stack:</span>
          <ul className="mt-2 flex flex-wrap items-center justify-start gap-2">
            {techs.map((tech, index) => (
              <Tag word={tech} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="card-link-buttons mt-6 flex justify-between">
        <Link to={repoUrl} target="_blank" rel="noopener noreferrer">
          <Button
            type="primary-slate-800"
            addClass={!repoUrl && "cursor-no-drop "}
          >
            Code
          </Button>
        </Link>
        <Link to={demoUrl} target="_blank" rel="noopener noreferrer">
          <Button
            type="horrow-slate-800"
            addClass={!demoUrl && "cursor-no-drop "}
          >
            Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
