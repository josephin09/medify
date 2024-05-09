import React, { useState, useEffect } from 'react';
import man from '../../assets/man.png';
import Ambulance from '../../assets/Ambulance.png';
import Hospital from '../../assets/Hospital.png';
import Capsule from '../../assets/Capsule.png';
import Drugstore from '../../assets/Drugstore.png';
import './SearchBox.css'; 

const SearchBox = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    console.log('Fetching states...');
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch('https://meddata-backend.onrender.com/states');
      const data = await response.json();
      console.log('States:', data);
      setStates(data);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const fetchCities = async (state) => {
    try {
      const response = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
      const data = await response.json();
      console.log('Cities:', data);
      setCities(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    fetchCities(selectedState);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-container">
      <div className='search-box'>
        <div>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className="select-container">
              <select
                className="custom-select"
                onChange={handleStateChange}
                value={selectedState}
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="select-container">
              <select
                className="custom-select"
                onChange={handleCityChange}
                value={selectedCity}
                disabled={!selectedState}
              >
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <button className='custom-button'>Search</button>
          </form>
        </div>
        <div className='related-items'>
          <h4 className='related-items-title'>You may be looking for</h4>
          <ul className='related-items-list'>
            <li className='related-item'>
              <img className='related-item-icon' src={man} alt="Doctor"/>
              Doctors
            </li>
            <li className='related-item'>
              <img className='related-item-icon' src={Drugstore} alt="Labs"/>
              Labs
            </li>
            <li className='related-item'>
              <img className='related-item-icon' src={Hospital} alt="Hospitals"/>
              Hospitals
            </li>
            <li className='related-item'>
              <img className='related-item-icon' src={Capsule} alt="Medical Store"/>
              Medical Store
            </li>
            <li className='related-item'>
              <img className='related-item-icon' src={Ambulance} alt="Ambulance"/>
              Ambulance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
