import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import DestinationList from "./components/DestinationList";
import ReservationForm from "./components/ReservationForm";
import ReviewForm from "./components/ReviewForm";
import PaymentForm from "./components/PaymentForm";
import ActivityList from "./components/ActivityList";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <NavLink to="/" className="nav-link accueil">Accueil</NavLink>  {/* 'Accueil' is on the left */}
          <div className="nav-links">  {/* Wrapper for the other links */}
            
            <NavLink to="/DestinationList" className="nav-link">Destinations</NavLink>
            <NavLink to="/ReservationForm" className="nav-link">Réservation</NavLink>
            <NavLink to="/UserForm" className="nav-link">Utilisateur</NavLink>
            <NavLink to="/ReviewForm" className="nav-link">Avis</NavLink>
            <NavLink to="/ActivityList" className="nav-link">Activités</NavLink>
            <NavLink to="/PaymentForm" className="nav-link">Paiement</NavLink>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/UserForm" element={<UserForm />} />
            <Route path="/DestinationList" element={<DestinationList />} />
            <Route path="/ReservationForm" element={<ReservationForm />} />
            <Route path="/UserForm" element={<UserForm />} />
            <Route path="/ReviewForm" element={<ReviewForm />} />
            <Route path="/ActivityList" element={<ActivityList />} />
            <Route path="/PaymentForm" element={<PaymentForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
