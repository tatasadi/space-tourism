export default function NumberedTitle({ number, title }) {
  return (
    <h2 className="numbered-title">
      <span>{number}</span> {title}
    </h2>
  )
}
