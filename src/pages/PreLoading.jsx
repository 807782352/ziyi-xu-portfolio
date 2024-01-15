import { ClimbingBoxLoader } from "react-spinners";

export default function PreLoading({ isLoading }) {
  return (
    <div
      className={`absolute flex items-center justify-center gap-4 bg-slate-900 ${
        isLoading ? "z-[9999] h-screen w-screen" : "z-0 h-0 w-0 hidden"
      }`}
    >
      <p className="yellow-red bg-clip-text text-2xl text-transparent ">
        Ziyi is Working ...
      </p>
      <ClimbingBoxLoader color={"#f9803e"} loading={isLoading} />
    </div>
  );
}
