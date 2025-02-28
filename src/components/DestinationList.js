import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DestinationList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cities, setCities] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchCity, setSearchCity] = useState("");
  
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    // Charger les pays depuis une API
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryData = data.map((country) => ({
          name: country.name.common,
          flag: country.flags.svg,
          code: country.cca2,
        }));
        setCountries(countryData);
        setFilteredCountries(countryData);
      })
      .catch((error) => console.error("Erreur lors du chargement des pays :", error));
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    // Charger les villes du pays sélectionné (exemple avec une API fictive)
    fetch(`https://countriesnow.space/api/v0.1/countries/cities`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country: country.name }),
    })
      .then((res) => res.json())
      .then((data) => setCities(data.data || []))
      .catch((error) => console.error("Erreur lors du chargement des villes :", error));
  };

  const handleReserve = (city) => {
    // Rediriger vers la page de réservation avec la ville sélectionnée
    navigate(`/ReservationForm?city=${encodeURIComponent(city)}`);
  };

  const handleSearchCountry = (e) => {
    setSearchCountry(e.target.value);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="destination-container">
      <h2 className="title">Explorez les Destinations</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un pays..."
          value={searchCountry}
          onChange={handleSearchCountry}
        />
      </div>

      <div className="countries-list">
        {filteredCountries.map((country) => (
          <div
            key={country.code}
            className={`country-item ${selectedCountry?.code === country.code ? "selected" : ""}`}
            onClick={() => handleCountrySelect(country)}
          >
            <img src={country.flag} alt={country.name} className="country-flag" />
            <span>{country.name}</span>
          </div>
        ))}
      </div>

      {selectedCountry && (
        <div className="cities-section">
          <h3>Villes de {selectedCountry.name}</h3>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher une ville..."
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
          </div>

          <div className="cities-list">
            {cities
              .filter((city) => city.toLowerCase().includes(searchCity.toLowerCase()))
              .map((city, index) => (
                <div key={index} className="city-item">
                  {city}
                  <button className="reserve-btn" onClick={() => handleReserve(city)}>
                    Réserver
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationList;
