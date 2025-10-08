// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ManageEvents from "./components/ManageEvents";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AlumniList from "./pages/AlumniList";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";

// Sample data
const sampleAlumni = [
  { id: 1, name: "Kani", email: "kani@cse.com", batch: "2020" },
  { id: 2, name: "Kavi", email: "kavi@cit.com", batch: "2019" },
  { id: 3, name: "adi", email: "adi@cit.com", batch: "2018" },
];

const sampleEvents = [
  { id: 1, name: "Annual Meetup", date: "2025-12-10", venue: "Main Hall" },
  { id: 2, name: "Alumni Networking", date: "2025-11-05", venue: "Auditorium" },
];

const sampleUser = { name: "Geethu", email: "geethu@cit.com", batch: "2021" };

function App() {
  return (
    <Router>
      <div
        className="app-container"
        style={{
          backgroundImage: "url('/college.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Overlay for readability */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(245, 243, 255, 0.85)",
            backdropFilter: "blur(4px)",
            zIndex: 0,
          }}
        />

        <div className="content-wrapper" style={{ position: "relative", zIndex: 1 }}>
          <Header />

          <main style={{ padding: "2rem", flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/alumni" element={<AlumniList alumni={sampleAlumni} />} />
              <Route path="/events" element={<ManageEvents events={sampleEvents} />} />
              <Route path="/profile" element={<Profile user={sampleUser} />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
