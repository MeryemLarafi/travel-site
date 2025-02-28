import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/reservations/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    
  
    if (response.ok) {
      navigate("/ReviewForm", { replace: true });
    } else {
      console.log("Erreur lors de l'envoi");
    }
  };
  

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    margin: 0, // Remove any default margin
    padding: 0, // Remove any padding
    backgroundImage: "url('https://www.deplacementspros.com/wp-content/uploads/2020/06/business-travel.jpg')",
    backgroundSize: "cover", // Ensure the image covers the entire background
    backgroundPosition: "center", // Center the background image
    backgroundRepeat: "no-repeat", // Ensure the image doesn't repeat
    backgroundAttachment: "fixed", // Keep the image fixed when scrolling
  };

  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Even more transparent background (90% transparent)
    borderRadius: "10px",
    padding: "40px",
    width: "500px", // Make the form wider
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backdropFilter: "blur(10px)", // Add blur to enhance transparency effect
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Match input field transparency with the form
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
  };

  const titleStyle = {
    color: "#333",
    fontSize: "28px",
    marginBottom: "30px",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={titleStyle}>Informations Personnelles</h2>
        <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required style={inputStyle} />
        <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} required style={inputStyle} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={inputStyle} />
        <input type="tel" name="telephone" placeholder="Téléphone" onChange={handleChange} required style={inputStyle} />
        <button type="submit" style={buttonStyle}>Soumettre</button>
      </form>
    </div>
  );
};

export default UserForm;
