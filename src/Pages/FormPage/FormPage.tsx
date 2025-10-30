import { useState, useEffect } from "react";
import "./FormPage.css";

function FormPage({ onBack }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    days: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("trips");
    if (saved) {
      try {
        setTrips(JSON.parse(saved));
      } catch {
        console.error("Invalid localStorage data");
        localStorage.removeItem("trips");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTrips = [...trips, form];
    setTrips(updatedTrips);

    setMessage(`✅ Thanks ${form.name}! Your trip to ${form.destination} is being planned.`);
    setShowModal(true);

    setForm({
      name: "",
      email: "",
      destination: "",
      days: "",
    });
  };

  return (
    <div className="form-container">
      <h2 style={{ fontFamily: "bodoni MT" }}>PLAN YOUR TRIP</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Destination:
          <input type="text" name="destination" value={form.destination} onChange={handleChange} required />
        </label>

        <label>
          Days of Travel:
          <input type="number" name="days" value={form.days} onChange={handleChange} required />
        </label>

        <div className="buttons">
          <button type="button" className="back-btn" onClick={onBack}>
            ← Back
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Booking Confirmed</h3>
            <p>{message}</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {trips.length > 0 && (
        <div className="saved-trips">
          <h4>Previous Trips:</h4>
          <ul>
            {trips.map((trip, index) => (
              <li key={index}>
                🧳 {trip.destination} – {trip.days} days ({trip.name})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormPage;
