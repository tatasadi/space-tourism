import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const { pathname } = useLocation()
  console.log(location)
  return (
    <header className="primary-header flex">
      <div>
        <img
          className="logo"
          src="/images/shared/logo.svg"
          alt="space tourism logo"
        />
      </div>
      {/* <nav>
        <ul className="primary-navigation underline-indicators flex">
          <li className={pathname === "/" ? "active" : ""}>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/"
            >
              <span>00</span> Home
            </Link>
          </li>
          <li className={pathname === "/destination" ? "active" : ""}>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/destination"
            >
              <span>01</span> Destination
            </Link>
          </li>
          <li className={pathname === "/crew" ? "active" : ""}>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/crew"
            >
              <span>02</span> Crew
            </Link>
          </li>
          <li className={pathname === "/technology" ? "active" : ""}>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/technology"
            >
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}
