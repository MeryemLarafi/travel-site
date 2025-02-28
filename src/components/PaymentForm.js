import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function PaymentForm() {
  const [payment, setPayment] = useState({
    montant: "",
    methode: "",
    date: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });
  const [showModal, setShowModal] = useState(false); 
  const [language, setLanguage] = useState("fr"); 
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Paiement enregistré :", payment);
    setShowModal(true); 
  };

  const handleCancel = () => {
    setPayment({
      montant: "",
      methode: "",
      date: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
    });
    navigate("/"); 
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Change the language
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/"); 
  };

  const modalMessages = {
    fr: {
      title: "✅ Réservation confirmée !",
      message:
        "Votre réservation a été effectuée avec succès. Nous vous attendons pour finaliser le paiement. N'oubliez pas de vérifier votre e-mail pour les informations de voyage. Nous vous souhaitons un voyage agréable et à temps pour ne pas manquer votre vol !😊",
      button: "OK",
    },
    en: {
      title: "✅ Reservation Confirmed!",
      message:
        "Your booking has been successfully made. We look forward to having you finalize your payment. Don't forget to check your email for your travel details. We wish you a pleasant journey, and be sure to arrive on time so you don't miss your flight!😊",
      button: "OK",
    },
    ar: {
      title: "✅ تم تأكيد الحجز!",
      message:
        "تم إجراء حجزك بنجاح. نتطلع إلى إتمام الدفع. لا تنسى التحقق من بريدك الإلكتروني للحصول على تفاصيل رحلتك. نتمنى لك رحلة ممتعة وتأكد من الوصول في الوقت المحدد حتى لا تفوتك طائرتك!😊",
      button: "موافق",
    },
  };

  const formStyle = {
    background: "rgba(255, 255, 255, 0.2)", 
    borderRadius: "15px",
    padding: "40px", 
    maxWidth: "600px", 
    margin: "50px auto",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(8px)", 
    textAlign: "center",
  };

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "30px", 
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    maxWidth: "450px",
    zIndex: 1000,
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
    zIndex: 999,
  };

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ color: "#007bff", fontSize: "2rem", marginBottom: "20px" }}>
          Paiement
        </h2>

        {/* Display total amount */}
        <div
          style={{
            fontSize: "1.2rem",
            color: "#333",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
        </div>

        <select
          name="methode"
          value={payment.methode}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px", 
            marginBottom: "20px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
          required
        >
          <option value="">Méthode de paiement</option>
          <option value="Carte Bancaire">Carte Bancaire</option>
          <option value="PayPal">PayPal</option>
          <option value="Espèces">Espèces</option>
        </select>

        <input
          type="date"
          name="date"
          value={payment.date}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
          required
        />

        {/* Conditional fields for card payment */}
        {payment.methode === "Carte Bancaire" && (
          <>
            <input
              type="text"
              name="cardNumber"
              value={payment.cardNumber}
              onChange={handleChange}
              placeholder="Numéro de carte"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "20px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
              required
            />
            <input
              type="text"
              name="cardExpiry"
              value={payment.cardExpiry}
              onChange={handleChange}
              placeholder="Date d'expiration (MM/YY)"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "20px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
              required
            />
            <input
              type="text"
              name="cardCVV"
              value={payment.cardCVV}
              onChange={handleChange}
              placeholder="CVV"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "20px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
              required
            />
          </>
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "15px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            fontSize: "1.2rem",
            transition: "background-color 0.3s ease",
          }}
        >
          Valider
        </button>

        {/* Cancel button */}
        <button
          type="button"
          onClick={handleCancel}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            padding: "15px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            fontSize: "1.2rem",
            marginTop: "10px",
          }}
        >
          Annuler
        </button>
      </form>

      {/* Modal Box */}
      {showModal && (
        <>
          <div style={overlayStyle}></div>
          <div style={modalStyle}>
            <h3 style={{ color: "#000", fontSize: "1.5rem", marginBottom: "20px" }}>
              {modalMessages[language].title}
            </h3>
            <p style={{ color: "#000", fontSize: "1rem" }}>
              {modalMessages[language].message}
            </p>
            
            {/* Language Selector inside the modal */}
            <div style={{ marginTop: "20px" }}>
              <button
                type="button"
                onClick={() => handleLanguageChange("fr")}
                style={{
                  padding: "8px 12px",
                  marginRight: "8px",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "0.9rem",
                }}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                style={{
                  padding: "8px 12px",
                  marginRight: "8px",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "0.9rem",
                }}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("ar")}
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "0.9rem",
                }}
              >
                AR
              </button>
            </div>
            
            <button
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "15px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "20px",
                fontSize: "1.1rem",
              }}
              onClick={handleModalClose}
            >
              {modalMessages[language].button}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PaymentForm;
