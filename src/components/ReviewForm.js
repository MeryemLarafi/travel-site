import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReviewForm() {
  const navigate = useNavigate();

  const [review, setReview] = useState({
    commentaire: "",
    note: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Avis soumis :", review);
    // Redirect to ActivityList after submitting review
    navigate("/ActivityList");
  };

  const handlePass = () => {
    // Navigate to ActivityList without submitting any review
    navigate("/ActivityList");
  };

  const formStyle = {
    background: "rgba(255, 255, 255, 0.2)", // More transparent (80% transparency)
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "600px",
    height: "auto", // Automatically adjust height
    minHeight: "500px", // Minimum height, feel free to adjust
    margin: "50px auto",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
    backdropFilter: "blur(10px)", // Frosted glass effect with more blur
    textAlign: "center",
  };

  const titleStyle = {
    color: "#007bff",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "15px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={titleStyle}>Donner un Avis</h2>
      <textarea
        name="commentaire"
        placeholder="Écrivez votre commentaire"
        value={review.commentaire}
        onChange={handleChange}
        style={{ ...inputStyle, height: "150px" }}
        required={review.commentaire.trim() !== ""} // Ensures the form cannot submit without a comment
      ></textarea>
      <input
        type="number"
        name="note"
        placeholder="Note (1-5)"
        min="1"
        max="5"
        value={review.note}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Soumettre
      </button>

      {/* Passer button - always visible */}
      <button
        type="button"
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "15px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
          fontSize: "1.1rem",
          marginTop: "15px",
        }}
        onClick={handlePass}
      >
        Passer
      </button>
    </form>
  );
}

export default ReviewForm;
