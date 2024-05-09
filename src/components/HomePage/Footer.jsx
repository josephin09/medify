import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import icon1 from '../../assets/icon 1.png';
import icon2 from '../../assets/icon 2.png';
import icon3 from '../../assets/icon 3.png';
import icon4 from '../../assets/icon 4.png';
import logo from '../../assets/logo.png';
import footer from '../../assets/footer.png';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div style={{ backgroundColor: '#E7F0FF', width: '100%', textAlign: 'center' }}>
              <img src={footer} alt='footer' className='footer'/>
           </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mb-4">
                        <img src={logo} alt='logo' className='logo' />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <img className='related-item-icon' src={icon1} alt="icon"/>
                        <img className='related-item-icon' src={icon2} alt="icon"/>
                        <img className='related-item-icon' src={icon3} alt="icon"/>
                        <img className='related-item-icon' src={icon4} alt="icon"/>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget footer-menu">
                            <ul>
                                <li><IoIosArrowForward className='icon' /> About Us</li>
                                <li><IoIosArrowForward className='icon' /> Our Pricing</li>
                                <li><IoIosArrowForward className='icon' /> Our Gallery</li>
                                <li><IoIosArrowForward className='icon' /> Appointment</li>
                                <li><IoIosArrowForward className='icon' /> Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget footer-menu">
                            <ul>
                                <li><IoIosArrowForward className='icon' /> Orthology</li>
                                <li><IoIosArrowForward className='icon' /> Neurology</li>
                                <li><IoIosArrowForward className='icon' /> Dental Care</li>
                                <li><IoIosArrowForward className='icon' /> Ophthalmology</li>
                                <li><IoIosArrowForward className='icon' /> Cardiology</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget footer-menu">
                            <ul>
                                <li><IoIosArrowForward className='icon' /> About Us</li>
                                <li><IoIosArrowForward className='icon' /> Our Pricing</li>
                                <li><IoIosArrowForward className='icon' /> Our Gallery</li>
                                <li><IoIosArrowForward className='icon' /> Appointment</li>
                                <li><IoIosArrowForward className='icon' /> Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

