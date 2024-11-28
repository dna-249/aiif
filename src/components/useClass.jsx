import React, { useEffect, useState } from 'react'

const useClass = () => {
    const [user,setUser]=useState('');
    const [class1,setClass1]=useState('');

    const handleClass = () => {
      setClass1(()=>
     <>
     <div className='check'> <button onClick={alert}> alert</button>
        <select onClick={(e)=>setUser(e.target.value)}>
            <option value='class1' > Class 1</option>
            <option value='class2'> Class 2</option>
            <option value='class3'> Class 3</option>
        </select>
        {user}
     </div>
     </>
    )
    };  let ind = 0;
    const alert = () => {
          ind++
      console.log(user);
    }
    useEffect(()=>{
        if(ind !== 0){
            alert()
        }
    },[ind])
    
    useEffect(()=>{
        if(user !=='')
            handleClass()
    },[user])

  return {handleClass,class1}
}

export default useClass