import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReservationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const selectedCity = queryParams.get('city') || '';

  const [departureCity, setDepartureCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [departureHour, setDepartureHour] = useState(''); // Automatically generated hour
  const [ticketPrice, setTicketPrice] = useState(0);
  const [status, setStatus] = useState(''); // Empty status initially

  // Auto-generate the departure hour
  const generateDepartureHour = () => {
    const randomHour = Math.floor(Math.random() * (23 - 6 + 1)) + 6; // Random hour between 6 AM and 11 PM
    const randomMinute = Math.floor(Math.random() * 60); // Random minute
    return `${randomHour.toString().padStart(2, '0')}:${randomMinute.toString().padStart(2, '0')}`;
  };

  // When the dates are selected, generate price and hour
  useEffect(() => {
    if (departureDate && returnDate) {
      const randomPrice = (Math.random() * (500 - 100) + 100).toFixed(2);
      setTicketPrice(randomPrice);

      // Generate departure hour after dates are selected
      setDepartureHour(generateDepartureHour());

      // Set the status to "Disponible" after dates are chosen
      setStatus('Disponible');
    } else {
      setStatus(''); // Reset status if dates are not selected
    }
  }, [departureDate, returnDate]);

  const handleConfirm = () => {
    // Redirect to UserForm page only when all fields are filled
    if (departureCity && departureDate && returnDate && departureHour && ticketPrice) {
      navigate('/UserForm');
    } else {
      alert('Veuillez remplir tous les champs avant de confirmer la réservation.');
    }
  };

  return (
    <div className="reservation-container">
      <div className="reservation-box">
        <h2>Réserver un voyage</h2>

        <label>Destination :</label>
        <input type="text" value={selectedCity} readOnly />

        <label>Ville de départ :</label>
        <input type="text" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />

        <div className="flex-row">
          <div>
            <label>Date d'aller :</label>
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          </div>
          <div>
            <label>Date de retour :</label>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </div>
        </div>

        {departureHour && (
          <>
            <label>Heure de départ :</label>
            <input type="time" value={departureHour} readOnly /> {/* Auto-generated hour after selecting dates */}
          </>
        )}

        {ticketPrice > 0 && (
          <>
            <label>Prix du billet :</label>
            <input type="text" value={`${ticketPrice} €`} readOnly />
          </>
        )}

        {status && (
          <>
            <label>Status :</label>
            <input type="text" value={status} readOnly />
          </>
        )}

        <button onClick={handleConfirm}>Confirmer</button> {/* Confirmation button */}
      </div>
    </div>
  );
};

export default ReservationForm;
