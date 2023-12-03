export default function DotIndicator({ isSelected, name, handleClick }) {
  return (
    <button aria-selected={isSelected} onClick={handleClick}>
      <span className="sr-only">{name}</span>
    </button>
  )
}
