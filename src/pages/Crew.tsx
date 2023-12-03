import { useState } from "react"
import Header from "../components/Header"
import DotIndicator from "../components/DotIndicator"

const crew = [
  {
    name: "Douglas Hurley",
    images: {
      png: "/images/crew/image-douglas-hurley.png",
      webp: "/images/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "/images/crew/image-mark-shuttleworth.png",
      webp: "/images/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "/images/crew/image-victor-glover.png",
      webp: "/images/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "/images/crew/image-anousheh-ansari.png",
      webp: "/images/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
]

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(crew[0])

  return (
    <div className="crew page-content">
      <Header />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>
        <div className="dot-indicators flex">
          {crew.map((c, i) => (
            <DotIndicator
              key={c.name}
              isSelected={c.name === selectedCrew.name}
              name={selectedCrew.name}
              handleClick={() => setSelectedCrew(crew[i])}
            />
          ))}
        </div>
        <article className="crew-details flow">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">{selectedCrew.role}</h2>
            <p className="fs-700 uppercase ff-serif">{selectedCrew.name}</p>
          </header>
          <p>{selectedCrew.bio}</p>
        </article>

        <picture>
          <picture srcset={selectedCrew.images.webp} type="image/webp" />
          <img src={selectedCrew.images.png} alt="Douglas Hurley" />
        </picture>
      </main>
    </div>
  )
}
