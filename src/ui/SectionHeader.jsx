export default function SectionHeader({ title, subtitle }) {
  return (
    <>
      <h2 className=" text-center">
        <span className="border-b-2 border-inherit border-orange-400 py-1 text-4xl font-bold uppercase tracking-[0.2em]">
          {title}
        </span>
      </h2>
      <h3 className="mt-4 text-center font-bold text-slate-300">{subtitle}</h3>
    </>
  );
}
