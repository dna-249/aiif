import React from 'react';
import { FaEnvelope, FaMapMarker,  FaPhoneAlt,  } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className='cont-footer'>
         <div className="footer-more"> Learn More </div>
        <div className="footer"><FaMapMarker /> Plot C07,near by House A91, Lias Estate, after Brains & Hammers Estate,Kafe District, Life-camp, Abuja. </div>
      <div className="footer"><FaPhoneAlt/> 08164849213, 09121966277,08039490386 </div>
      <div className="footer"><FaEnvelope /> attasfiyah2024@gmail.com</div>
    </div>
  </>)
}

export default Footer
