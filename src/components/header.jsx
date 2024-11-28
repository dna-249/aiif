import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='cont-header'>
        <div className='logo'><img src='tasfiyyah4.jpg' width={50} height={50}/> </div>
        <div className='link'>
            <ul>
            <li><Link  to='/welcome'> Home</Link></li>
            <li><Link  to='/registration'> Registration</Link></li>
            <li><Link  to=''> Portal</Link></li>
            <li><Link  to=''> Updates</Link></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Header
