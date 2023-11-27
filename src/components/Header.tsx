import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import NavItem from "./NavItem"

export default function Header() {
  const { pathname } = useLocation()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="primary-header flex">
      <div>
        <img
          className="logo"
          src="/images/shared/logo.svg"
          alt="space tourism logo"
        />
      </div>
      <button
        className={`mobile-nav-toggle ${mobileNavOpen ? "open" : ""}`}
        aria-controls="primary-navigation"
        onClick={() =>
          setMobileNavOpen((prevMobielNavOpen) => !prevMobielNavOpen)
        }
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className={`primary-navigation underline-indicators flex ${
            mobileNavOpen ? "open" : ""
          }`}
        >
          <NavItem to="/" isActive={pathname === "/"}>
            <span>00</span> Home
          </NavItem>
          <NavItem to="/destination" isActive={pathname === "/destination"}>
            <span>02</span> Destination
          </NavItem>
          <NavItem to="/crew" isActive={pathname === "/crew"}>
            <span>03</span> Crew
          </NavItem>
          <NavItem to="/technology" isActive={pathname === "/technology"}>
            <span>04</span> Technology
          </NavItem>
        </ul>
      </nav>
    </header>
  )
}
