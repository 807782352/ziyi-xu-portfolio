export default function Tag({ word }) {
  return <li>
    <span className="inline-block text-slate-300 font-bold bg-gray-700 px-2 py-1 rounded-lg highlight">{word}</span>
  </li>;
}
