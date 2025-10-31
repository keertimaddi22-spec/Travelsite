import './Navbar.css'
import { Link } from "react-router-dom";
 
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TravelGo</h1>
      <ul className="nav-links">
<li>
  <Link to="/flights" style={{ textDecoration: "none", color: "inherit" }}>
    Flights
  </Link>
</li>
        <li>Places</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar