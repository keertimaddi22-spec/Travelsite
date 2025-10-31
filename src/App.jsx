import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Places from "./Pages/Places/Places";
import Footer from "./Pages/Footer/Footer";
import Hero from "./Pages/Hero/Hero";
import FormPage from "./Pages/FormPage/FormPage";
import Flights from "./Pages/Flights/Flights";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(savedTrips);
  }, []);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  return (
    <Router basename="/Travelsite">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            !showForm ? (
              <>
                <Hero onStart={() => setShowForm(true)} />
                <Places />
                <Footer />
              </>
            ) : (
              <FormPage
                trips={trips}
                setTrips={setTrips}
                onBack={() => setShowForm(false)}
              />
            )
          }
        />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </Router>
  );
}

export default App;
