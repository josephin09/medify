import React from 'react';
import tick from '../../assets/tick.png';
import patient from '../../assets/patient.png';
import './Patient.css';

const Patient = () => {
  return (
    <div className='patient-container'>
      <div className='image-container'>
        <img src={patient} alt="Patient" className='patient-image' />
      </div>

      <div className='content-container'>
        <h5 className='helping-patients'>HELPING PATIENTS FROM AROUND THE GLOBE!!</h5>
        <h1 className='patient-care'>Patient <span className='care-highlight'>Caring</span></h1>
        <p className='care-text'>Our goal is to deliver quality of care in a courteous, respectful, and <br/>compassionate manner. We hope you will allow us to care for you <br/>and strive to be the first and best choice for healthcare.</p>
        <ul className='care-list'>
          <li className='list-item'>
            <img src={tick} alt="Tick" className='tick-icon' />
            Stay Updated About Your Health
          </li>
          <li className='list-item'>
            <img src={tick} alt="Tick" className='tick-icon' />
            Check Your Results Online
          </li>
          <li className='list-item'>
            <img src={tick} alt="Tick" className='tick-icon' />
            Manage Your Appointments
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Patient;
