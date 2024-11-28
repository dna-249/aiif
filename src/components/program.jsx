import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Program = () => {
  return (
    <>
    <div className='header2'><Link to={'/'}><FaArrowLeft /></Link> </div>
    <div className='margin'>
      <h3>AIIF PROGRAMMES</h3>
      <h4>Educational and Enlightenment Programs</h4> 
      <ul>
<li>Noble Qur’an Programs</li> 

<li>Classical Arabic Language Programs</li>

<li>Islamic Studies Programs</li>
 
<li>Islamic morals teachings,Values and Ethics Programs</li>

<li>Conventional School Programs</li>

<li>Vocational Education Programs</li>

<li>Professional education Programs</li>

<li>Public Lectures, Workshops and Seminars Programs</li>

<li>Pre-marital and Marital Counsellings Programs</li>

<li>Preaching and Da’wah Grassroots Programs</li>
</ul>

<h4>Humanitarian Aid and Assistance Programs</h4>
<ul>
<li>    
Social relief programs. </li>

<li>Ramadan Feeding and Food assistance Programs.</li> 

<li>Almajiri and Out-of-School Children Programs.</li> 

<li>Convert and Revert Muslims Programs.</li>

<li>Children with Disabilities Programs.</li>

<li>Orphan Child Development Programs</li>

<li>Skills Development & Livelihood Programs.</li>

<li>Healthcare Outreach Programs.</li>

<li>Zakaah and charity Distribution Programs.</li>

<li>Internally displaced people (IDPs) Programs</li>
</ul>

<h4>Sustainable and Economy Development Programs</h4>
<ul>
    <li>
Business and Financial Literacy Programs</li>

<li>Boosting agricultural productivity Programs </li>

<li>Modern and Traditional Farming Programs</li>

<li>Animal and Food Production Programs</li>

<li>Poultry and Fish production programs</li>

<li>Youth capacity development programs</li>

<li>Entrepreneurship and Skill Acquisition Programs</li>

<li>Local farmers inputs support Programs</li>
</ul>
    </div>
  </>)
}

export default Program
