export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "text-orange-400 border-b-2 border-orange-500"
    : "text-slate-300";

  return (
    <button onClick={selectTab}>
      <p
        className={`ml-3 font-semibold hover:text-orange-300 ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
}
