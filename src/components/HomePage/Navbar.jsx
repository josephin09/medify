import React from 'react';
import logo from '../../assets/logo.png';
import doctor from '../../assets/doctor.png';
import { TypeAnimation } from 'react-type-animation';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div>
        <p style={{ backgroundColor: '#2AA7FF', color: '#ffffff', padding: '10px', textAlign: 'center' }}>
    The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
    </p>
    <div>
        <nav className='navbar'>
          <img src={logo} alt='logo' className='logo' />
          <ul className='menu'>
            <li><a href="/doctors">Find Doctors</a></li>
            <li><a href="/hospitals">Hospitals</a></li>
            <li><a href="/medicines">Medicines</a></li>
            <li><a href="/surgeries" >Surgeries</a></li>
            <li><a href="/software for providers" >Software for Providers</a></li>
            <li><a href="/facilities" >Facilities</a></li>
          </ul>
          <button className='button hidden md:block'>My Bookings</button>
        </nav>
        <div className='grid-container'>
          <div className='text-container'>
            <h5 className='title'>Skip the travel! Find Online</h5>
            <span className='font-bold text-4xl' style={{ fontSize: "20px" }}>Medical</span> <span className='font-bold text-4xl text-blue'>
              <TypeAnimation
                sequence={[
                  'Centers',
                  1000, 
                  'Hospitals',
                  1000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
            <p>Connect instantly with a 24x7 specialist or choose to <br/>video visit a particular doctor.</p>
            <button className='button'>Find Centers</button>
          </div>
            <img src={doctor} alt="Hero" className='hero-image' />
          </div>
        
      </div>
    </div>
  );
}

export default Navbar;
