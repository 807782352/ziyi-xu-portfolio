import { Link } from "react-router-dom";

export default function NavLinkItem({ url, title }) {
  return (
    <li>
      <Link
        to={`/${url}`}
        className="hover:yellow-red block px-3 py-2 font-extrabold text-white transition  duration-150 ease-in-out hover:rounded-2xl hover:text-slate-900"
      >
        {title}
      </Link>
    </li>
  );
}
