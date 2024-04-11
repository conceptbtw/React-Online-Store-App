import { Link } from "react-router-dom";

export default function HeaderNavItem({ to, page }) {
  return (
    <li className="">
      <Link to={to}>{page}</Link>
    </li>
  );
}
