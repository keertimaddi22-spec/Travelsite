import './Navbar.css'
 
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TravelsGo</h1>
      <ul className="nav-links">
        <li>Flights</li>
        <li>Places</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar