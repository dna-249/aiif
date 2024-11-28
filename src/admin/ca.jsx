import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Ca = () => {
    const [select1, setSelect1] = useState('2025/2026')
    const [select2, setSelect2] = useState('first')
    const [select3, setSelect3] = useState('ss1')
    const [program, setProgram] = useState('Tahfeez & Islamiyyah')
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
             <div className='admin-headers'>C/A</div>
    <div>Program type: 
        <select onChange={(e)=>setProgram(e.target.value)}>
            <option value="Tahfeez & Islamiyyah"> Tahfeez & Islamiyyah</option>
            <option value="Intensive Full-time Tahfeez">Intensive Full-time Tahfeez</option>
            <option value="Women Section(Working Class)">Women Section(Working Class)</option>
            <option value="Women Section(Non-Working Class)">Women Section(Non-Working Class)</option>
            <option value="Adult Quran and Arabic Class">Adult Quran and Arabic Class</option>
            <option value="Extra and Online Class">Extra and Online Class</option>
        </select>
        </div>
    <div className='select'>
        <div >
             Session
            <select onChange={(e)=>setSelect1(e.target.value)}> 
            <option value="2025/2026">2025/2026</option>
            <option value="2026/2027">2026/2027</option>
            <option value="2027/22028">2027/2028</option>
            </select>
        </div>
        <div>
             Term
            <select onChange={(e)=>setSelect2(e.target.value)}> 
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            </select>
        </div>
        <div>
             Class
            <select onChange={(e)=>setSelect3(e.target.value)}> 
            <option value="ss3">ss3</option>
            <option value="ss2">ss2</option>
            <option value="ss1">ss1</option>
            </select>
        </div>
    </div>
    <div>
             <h5>program:{program} <br />
            C/A:{select1}/{select2}/{select3} </h5>
        </div>
              
              
               </div>
             <div> status</div>
        </div>
    </div>





    
    </>
  )
}

export default Ca