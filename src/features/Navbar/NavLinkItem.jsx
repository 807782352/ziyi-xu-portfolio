import { Link } from "react-router-dom";

export default function NavLinkItem({ url, title }) {
  return (
    <li>
      <Link to={`/${url}`} className="block py-2 pl-3 pr-4 text-slate-100" >
        {title}
      </Link>
    </li>
  );
}
