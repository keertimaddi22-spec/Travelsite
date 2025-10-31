import { useState } from "react";
import "./Flights.css";

function Flights({ onBackToHome }) {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    date: "",
  });

  const domesticFlights = [
    { id: 1, from: "Mumbai", to: "Delhi", price: "₹4,200", airline: "IndiGo", time: "09:30 AM" },
    { id: 2, from: "Bangalore", to: "Goa", price: "₹2,800", airline: "Air India", time: "11:15 AM" },
    { id: 3, from: "Chennai", to: "Kolkata", price: "₹5,000", airline: "SpiceJet", time: "01:45 PM" },
    { id: 4, from: "Hyderabad", to: "Jaipur", price: "₹4,700", airline: "Vistara", time: "03:20 PM" },
  ];

  const internationalFlights = [
    { id: 1, from: "Delhi", to: "Dubai", price: "₹28,000", airline: "Emirates", time: "06:00 AM" },
    { id: 2, from: "Mumbai", to: "London", price: "₹56,000", airline: "British Airways", time: "10:30 PM" },
    { id: 3, from: "Bangalore", to: "Singapore", price: "₹32,500", airline: "Singapore Airlines", time: "02:10 AM" },
    { id: 4, from: "Chennai", to: "Paris", price: "₹48,200", airline: "Air France", time: "08:00 AM" },
  ];

  const openModal = (flight) => {
    setSelectedFlight(flight);
    setShowForm(false);
    setBookingConfirmed(false);
  };

  const closeModal = () => {
    setSelectedFlight(null);
    setShowForm(false);
    setBookingConfirmed(false);
    setFormData({ name: "", age: "", email: "", date: "" });
  };

  const handleConfirmClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setShowForm(false);
    setTimeout(() => closeModal(), 2000);
  };

  return (
    <div className="flights-page">
      <h2 className="flights-title">✈️ Available Flights</h2>

      <section className="flight-section">
        <h3>Domestic Flights</h3>
        <div className="flight-grid">
          {domesticFlights.map((f) => (
            <div key={f.id} className="flight-card">
              <h4>
                {f.from} <span>→</span> {f.to}
              </h4>
              <p className="flight-price">{f.price}</p>
              <button className="book-btn" onClick={() => openModal(f)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="flight-section">
        <h3>International Flights</h3>
        <div className="flight-grid">
          {internationalFlights.map((f) => (
            <div key={f.id} className="flight-card intl">
              <h4>
                {f.from} <span>→</span> {f.to}
              </h4>
              <p className="flight-price">{f.price}</p>
              <button className="book-btn" onClick={() => openModal(f)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

     <button className="return" onClick={onBackToHome}>
        🏠 HOME
      </button>

      {selectedFlight && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {!showForm && !bookingConfirmed && (
              <>
                <h3>Booking Details</h3>
                <p>
                  <strong>From:</strong> {selectedFlight.from}
                </p>
                <p>
                  <strong>To:</strong> {selectedFlight.to}
                </p>
                <p>
                  <strong>Airline:</strong> {selectedFlight.airline}
                </p>
                <p>
                  <strong>Departure Time:</strong> {selectedFlight.time}
                </p>
                <p>
                  <strong>Price:</strong> {selectedFlight.price}
                </p>
                <button className="confirm-btn" onClick={handleConfirmClick}>
                  Confirm Booking
                </button>
                <button className="close-btn" onClick={closeModal}>
                  Close
                </button>
              </>
            )}

            {showForm && !bookingConfirmed && (
              <form className="booking-form" onSubmit={handleSubmit}>
                <h3>Enter Your Details</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
                <div className="form-buttons">
                  <button type="button" className="back-btn" onClick={handleBackClick}>
                    ← Back
                  </button>
                  <button type="submit" className="confirm-btn">
                    Submit Booking
                  </button>
                </div>
              </form>
            )}

            {bookingConfirmed && (
              <div className="success-message">
                🎉 Booking Confirmed!
                <p>We’ve sent your flight details to your email.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Flights;
