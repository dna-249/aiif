import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Content = () => {
  return (
    <>
    <div className='header2'><Link to={'/'}><FaArrowLeft /></Link> </div>
    <div style={{height:"400px"}} className='margin'>
      <h3>  AIIF CONTENT</h3>
        <ul> <Link to={'/about'}>
<li> Project</li>

<li>Introduction</li>

<li>Mission Statement</li>

<li>Vission statement</li>

<li> Aims and objectives</li>

<li> Project goals</li>

<li> Philosophy</li> </Link>
<Link to='/team'>

<li> Programs</li>

<li> Our team </li>

<li> Orgonograph</li>

<li> Board of Trustees</li></Link>
        </ul>
      
    </div>
  </>)
}

export default Content
