import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import { FaAddressCard,  FaBars ,FaBook,FaCalendar,FaTasks} from 'react-icons/fa';
import Admin from '../admin';
import { useState,useEffect } from 'react';
const Welcome = () => {

 
  return (
    <>
    
    <div className='cont-welcome'>
    </div>
    <div className="cont-welcome2">
        <div className="cont-welcome3"> 
        <div className="welcome"> <img src='tasfiyyah4.jpg' width={50} height={50}/></div>
        <div className="welcome2"> <FaBars /> </div>
        </div>
        <div className="welcome1"> <h3> Attasfiyah Islamic <br /> International Foundation <br /> Abuja </h3>
          <div style={{width:'200px',margin:'auto'}}><ul> 
         <li> <Link to='/registration'> Registration </Link></li> <br />
         <li > <Link to='/programs'>  Portal </Link></li> <br />
          <li> <Link to='/post'>  Update </Link> </li>
          
       </ul></div>
       </div>
    </div>
    
    <div className='welcome1 '  ><h1 style={{color:' rgba(3, 40, 72, 0.778)'}}>ABOUT AIIF </h1></div>
    
  <div >
    <div className='cont2-welcome' >
       <div className='welcome-fa'><Link to={'/content'}><FaTasks className='fa' /> <br /> AIIF CONTENT</Link></div>
       <div className='welcome-fa'> <Link to={'/about'}> <FaAddressCard className='fa'/> <br /> AIIF  PROJECT</Link></div>
       <div className='welcome-fa'><Link to={'/program'}><FaBook className='fa'/> <br />AIIF <br /> PROGRAMMES </Link></div>
       <div className="welcome-fa" ><Link to={'/team'}><FaCalendar className='fa' /> <br /><br /> OUR TEAM </Link></div>
    </div></div>
    
    

    <Footer/>
    </>
  )
}

export default Welcome