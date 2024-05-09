import React from 'react';
import family from '../../assets/family.png';
import './Family.css'; 

const Family = () => {
  return (
    <div className='family-container'>
      <div className='text-container'>
        <h5 className='health-care'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
        <h1 className='family-heading'>Our Families</h1>
        <p className='care-text'>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
      </div>
      <div className='image-container'>
        <img src={family} alt="Family" className='family-image' />
      </div>
    </div>
  );
};

export default Family;
