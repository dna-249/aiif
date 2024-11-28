import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Staff = () => {
const [select1, setSelect1] = useState()
const [select2, setSelect2] = useState()
const [select3, setSelect3] = useState()
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
              
             <div className="admin-headers">Staff</div>
    <div className="select2">
      <div> Management:
        <select onChange={(e)=>setSelect1(e.target.value)} >
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select >
      </div>
      <div> Academic Staff:
        <select onChange={(e)=>setSelect2(e.target.value)} >
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div> 
    </div>
    <div className='select2'>
        <div>get-Management-All:</div>
        <div>get-Academic-All:</div>
      </div>
              
               </div>
             <div> status</div>
        </div>
    </div>


    
  </>)
}

export default Staff
