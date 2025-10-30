import { useState, useEffect } from "react";
import Navbar from "./Pages/Navbar/Navbar";
import Places from "./Pages/Places/Places";
import Footer from "./Pages/Footer/Footer";
import Hero from "./Pages/Hero/Hero";
import FormPage from "./Pages/FormPage/FormPage";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [trips, setTrips] = useState([]);

  // ✅ Load trips from localStorage on first load
  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(savedTrips);
  }, []);

  // ✅ Save trips to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  return (
    <>
      <Navbar />
      {!showForm ? (
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
      )}
    </>
  );
}

export default App;
