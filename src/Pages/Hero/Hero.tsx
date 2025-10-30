import "./Hero.css";

function Hero({ onStart }) {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>Explore the World</h1>
        <p>Discover new destinations and plan your perfect trip.</p>
        <button onClick={onStart}>Start Now</button>
      </div>
    </section>
  );
}

export default Hero;
