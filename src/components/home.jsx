import React, { useEffect, useState } from 'react'
import useRegistration from './useRegistration'
import useClass from './useClass';
import useExam from './useExam';

const Home = () => {
    const {user2,handleUser}=useRegistration('');
    const {handleClass,class1} = useClass('')
    const {handleExam,exam,exam2} = useExam('')

  return (<>
   
  <div className='home-cont'>
    <div className='home'>
      welcome to Portal  </div>
      <div className='home2cont'>
        <div className="home2" onClick={handleUser}>Registration</div>
        <div className="home2" onClick={handleClass}>Class </div>
        <div className="home2" onClick={()=>handleExam()}>Term</div>
        <div className="home2" >News</div>
        
            {user2}{class1}{exam} {exam2}
       
      </div></div>
  </>)
}

export default Home
