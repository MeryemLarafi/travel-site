import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ActivityList() {
  const navigate = useNavigate();

  const activities = [
    { nom: "Visite Guidée", description: "Découverte des lieux historiques", prix: 50 },
    { nom: "Plongée Sous-marine", description: "Explorez les fonds marins", prix: 100 },
    { nom: "Randonnée", description: "Une aventure en pleine nature", prix: 30 },
    { nom: "Safari", description: "Explorez la faune sauvage", prix: 120 },
    { nom: "Parachutisme", description: "Saut en parachute depuis 4000m", prix: 250 },
    { nom: "Ski", description: "Profitez des montagnes enneigées", prix: 80 },
    { nom: "Vélo Tout Terrain", description: "Aventure en VTT dans les montagnes", prix: 60 },
    { nom: "Escalade", description: "Grimpez les plus hautes parois rocheuses", prix: 110 },
    { nom: "Surf", description: "Attrapez les vagues", prix: 70 },
    { nom: "Bungee Jumping", description: "Saut à l'élastique au-dessus de la rivière", prix: 180 },
    { nom: "Kitesurf", description: "Lancez-vous dans la mer avec un cerf-volant", prix: 150 },
  ];

  const containerStyle = {
    backgroundImage: "url('https://your-image-url.com')",  // Replace with your background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    borderRadius: "10px",
    padding: "40px",
    maxWidth: "1200px",
    margin: "50px auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headingContainerStyle = {
    position: "relative",
    textAlign: "center",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    color: "#007bff",
    fontWeight: "bold",
  };

  const arrowButtonStyle = {
    position: "absolute",
    top: "50%",
    left: "100%",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",  // No background color
    border: "none",
    fontSize: "1.5rem",  // Bigger font size for the arrow
    color: "#333",  // Dark color for the arrow
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: "15px", // Added margin to separate from title
  };

  const passTextStyle = {
    marginLeft: "5px", // Smaller gap between arrow and text
    fontSize: "1.2rem",  // Slightly larger font size for the word "Pass"
    fontWeight: "bold",  // Bold for better visibility
  };

  const activityStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "left",
    fontSize: "1.1rem",
    color: "black",
    transition: "transform 0.3s ease",
    width: "100%",
    maxWidth: "300px",
    margin: "10px",
  };

  const descriptionStyle = {
    fontSize: "1.1rem",
    color: "black",
    marginBottom: "10px",
  };

  const priceStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#007bff",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
    width: "100%",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const handleReservation = (activity) => {
    navigate("/PaymentForm", { state: { activity } });
  };

  const handleSkipReservation = () => {
    navigate("/PaymentForm", { state: { activity: null } });
  };

  return (
    <div style={containerStyle}>
      {/* Title Container with Arrow Button and "Pass" */}
      <div style={headingContainerStyle}>
        <h2 style={headingStyle}>Activités Disponibles</h2>
        {/* Right Arrow with "Pass" Text */}
        <button
          style={arrowButtonStyle}
          onClick={handleSkipReservation}
        >
          &#8594; {/* Right arrow symbol */}
          <span style={passTextStyle}>Passer</span> {/* "Pass" text */}
        </button>
      </div>

      {/* Activity Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {activities.map((activity, index) => (
          <div
            key={index}
            style={activityStyle}
          >
            <h3>{activity.nom}</h3>
            <p style={descriptionStyle}><strong>Description :</strong> {activity.description}</p>
            <p style={priceStyle}><strong>Prix :</strong> {activity.prix}€</p>
            <button
              style={buttonStyle}
              onClick={() => handleReservation(activity)}
            >
              Réserver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityList;
