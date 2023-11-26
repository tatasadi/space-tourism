import { Link } from "react-router-dom"

export default function TabItem({ isActive, text }) {
  return (
    <button
      aria-selected={isActive}
      className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
    >
      {text}
    </button>
  )
}
