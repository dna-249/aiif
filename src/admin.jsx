import React, { useState,} from 'react'
import { Link, } from 'react-router-dom'



const Admin = () => {   
  return (
    <>
    <div className='admin-header' > DashBoard </div>
    <div className='cont-admin'>
        <div className="admin-icon">
            <div><Link to={'/'}>Home</Link>  </div>
            <div><Link to={'/programs'}>Program</Link></div>
            <div><Link to={'/staff'}>Staff</Link></div>
            <div><Link to={'/exam'}> Examination</Link></div>
            <div><Link to={'/ca'}>C/A</Link></div>
            <div><Link to={'/update'}>Update</Link></div>
        </div>
        <div className="admin-icon2"> 
             <div className='admin-row' style={{overflowY:'scroll',height:'450px',overflowX:'hidden'}}> <div> icons</div>
             <div> icons</div>
             <div> icons</div>
             <div> icons</div>
             <div> icons</div>
             <div> icons</div>
              </div>
             <div style={{overflowY:'scroll',height:'450px',overflowX:'hidden'}}>
              
              
              
               </div>
             <div> status</div>
        </div>
    </div>
    </>
  )
}

export default Admin