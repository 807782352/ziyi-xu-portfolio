import { Link } from "react-router-dom";

export default function NavLinkItem({ url, title }) {
  return (
    <li className="inline-block highlight  px-3 py-2 text-white">
      <Link to={`/${url}`}>{title}</Link>
    </li>
  );
}
