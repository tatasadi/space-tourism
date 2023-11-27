import { Link } from "react-router-dom"

export default function NavItem({to, isActive, children}) {
  return (
    <Link to={to} className={isActive ? "active" : ""}>
      <li
        className="ff-sans-cond uppercase text-white letter-spacing-2"
      >
        {children}
      </li>
    </Link>
  )
}
