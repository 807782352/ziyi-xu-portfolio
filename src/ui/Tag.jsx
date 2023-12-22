export default function Tag({ word }) {
  return <li>
    <span className="inline-block text-slate-300 font-bold bg-gray-700 px-2 py-1 rounded-lg hover:yellow-red hover:text-slate-900 hover:scale-110 transition-transform ease-in-out duration-300">{word}</span>
  </li>;
}
