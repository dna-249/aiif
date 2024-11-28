import React from 'react'
import { FaArrowLeft, FaBackspace } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <>
    <div className='header2'><Link to={'/'}><FaArrowLeft /></Link> </div>
    <div className='margin'>
      <h2>OUR TEAM</h2>

Yasmeen Integrated and Humanitarian Foundation was initiated by
 group of people who are highly concerned and committed towards 
 contributing their time, knowledge, skills, energy and resources 
 for inculcating sound educational services, humanitarian services,
  and community development services. to promote peace, security,
   development of the Muslim ummah, and economic growth within the
    FCT and Nigeria at large.


    <h3>ORGANOGRAM</h3>
    <h4>ADMINISTRATIVE MANAGEMENT ORGANOGRAM</h4>
    <ol>
        <li>Board of Trustee</li>
        <li>Founder/Director</li>
        <li>Secretary</li>
        <li>Accountant/Treasurer</li>
    </ol>

    <h3>BOARD OF TRUSTEES</h3>
    <ol>
        <li>Chairman Management Board <br />
                AIG Umar Shehu (Retired)
        </li><br />
        <li>Founder/Director<br />
        Salisu Ibrahim Imam</li><br />
        <li>Secretary<br />
        Abubakar Sadiq Abubakar</li><br />
        <li>Accountant/Treasury<br />
         Muhammad Tukur Abubakar</li>
    </ol>
    </div>
  </>)
}

export default Team
