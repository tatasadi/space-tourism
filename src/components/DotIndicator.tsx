export default function DotIndicator({ isSelected, name }) {
  return (
    <button aria-selected={isSelected}>
      <span className="sr-only">{name}</span>
    </button>
  )
}
