import "./Places.css";

function Places() {
  const places = [
    {
      name: "Taj Mahal, Agra",
      desc: "A symbol of eternal love and one of the Seven Wonders of the World.",
      image:
        "https://images.unsplash.com/photo-1583241800517-5a8c2e0e480d?auto=format&fit=crop&w=800&q=80",
      wiki: "https://en.wikipedia.org/wiki/Taj_Mahal",
    },
    {
      name: "Jaipur, Rajasthan",
      desc: "Known as the Pink City, rich with history, forts, and royal heritage.",
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      wiki: "https://en.wikipedia.org/wiki/Jaipur",
    },
    {
      name: "Kerala Backwaters",
      desc: "A serene network of lagoons, lakes, and canals in South India.",
      image:
        "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=800&q=80",
      wiki: "https://en.wikipedia.org/wiki/Backwaters_in_Kerala",
    },
    {
      name: "Ladakh, Jammu & Kashmir",
      desc: "A high-altitude desert famous for monasteries and breathtaking landscapes.",
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      wiki: "https://en.wikipedia.org/wiki/Ladakh",
    },
  ];

  return (
    <section className="places" id="places">
      <h2>Popular Destinations</h2>
      <div className="places-grid">
        {places.map((place, index) => (
          <a
            key={index}
            href={place.wiki}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Places;
