import { useState } from "react"
import Header from "../components/Header"

const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "/images/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/images/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "/images/technology/image-spaceport-portrait.jpg",
      landscape: "/images/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "/images/technology/image-space-capsule-portrait.jpg",
      landscape: "/images/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-technologyed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]

export default function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0])

  return (
    <div className="technology page-content">
      <Header />
      <main
        id="main"
        className="grid-container grid-container--technology flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space Launch 101
        </h1>
        <div className="number-indicators flex">
          {technology.map((c, i) => (
            <button
              key={c.name}
              aria-selected={c.name === selectedTechnology.name}
              onClick={() => setSelectedTechnology(technology[i])}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <article className="technology-details flow">
          <header className="flow flow--space-small">
            <h2 className="fs-500 ff-serif uppercase text-accent">
              The terminology…
            </h2>
            <p className="fs-700 uppercase ff-serif">
              {selectedTechnology.name}
            </p>
          </header>
          <p>{selectedTechnology.description}</p>
        </article>

        <picture>
          <source
            srcSet={selectedTechnology.images.portrait}
            type="image/jpg"
          />
          <img src={selectedTechnology.images.portrait} alt="Douglas Hurley" />
        </picture>
      </main>
    </div>
  )
}
