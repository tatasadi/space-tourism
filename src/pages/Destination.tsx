import { useState } from "react"
import Header from "../components/Header"
import TabItem from "../components/TabItem"

const destinations = [
  {
    name: "Moon",
    images: {
      png: "/images/destination/image-moon.png",
      webp: "/images/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/images/destination/image-mars.png",
      webp: "/images/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/images/destination/image-europa.png",
      webp: "/images/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/images/destination/image-titan.png",
      webp: "/images/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
]

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  )

  return (
    <div className="destination page-content">
      <Header />
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> pick your destination
        </h1>
        <picture>
          <source srcSet={selectedDestination.images.webp} type="image/webp" />
          <img
            src={selectedDestination.images.png}
            alt={`the ${selectedDestination.name}`}
          />
        </picture>
        <div className="tab-list underline-indicators flex">
          {destinations.map((d, i) => (
            <TabItem
              key={d.name}
              isActive={selectedDestination.name === d.name}
              text={d.name}
              handleClick={() => setSelectedDestination(destinations[i])}
            />
          ))}
        </div>
        <article className="destination-info flow">
          <h2 className="fs-800 uppercase ff-serif">
            {selectedDestination.name}
          </h2>
          <p>{selectedDestination.description}</p>
          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">avg. distance</h3>
              <p className="fs-500 ff-sarif uppercase">
                {selectedDestination.distance}
              </p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">est. travel time</h3>
              <p className="fs-500 ff-sarif uppercase">
                {selectedDestination.travel}
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
