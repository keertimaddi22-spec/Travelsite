import './Places.css'

function Places() {
  const places = [
    {
      id: 1,
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      desc: "The city of love, lights, and art.",
      wiki: "https://en.wikipedia.org/wiki/Paris",
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      desc: "A perfect blend of tradition and technology.",
      wiki: "https://en.wikipedia.org/wiki/Tokyo",
    },
    {
      id: 3,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "Crystal-clear water and peaceful beaches.",
      wiki: "https://en.wikipedia.org/wiki/Maldives",
    },
  ]

  return (
    <section className="places">
      <h2>Popular Destinations</h2>
      <div className="grid">
        {places.map((place) => (
          <div
            key={place.id}
            className="card"
            onClick={() => window.open(place.wiki, "_blank")}
          >
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Places