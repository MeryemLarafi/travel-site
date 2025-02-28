import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const images = [
    "https://images.radio-canada.ca/q_auto,w_700/v1/ici-info/16x9/aeroport-voyage-avion-voyageur.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh", // Full viewport height
        width: "100%",   // Ensure it covers the full width
      }}
    >
      <div className="overlay">
        
        <h1>🌍 Bienvenue, Chers Voyageurs ! ✈️</h1>
        <p>Nous sommes ravis de vous accompagner dans votre prochaine aventure.</p>
        <p>Explorez des destinations incroyables et vivez des expériences inoubliables ! 🏝️🏔️</p>
      </div>
    </div>
  );
};

export default HomePage;
