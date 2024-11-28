import React, { useEffect } from 'react'
import { useState } from 'react';
const useFunction = () => {
   
  const [task1,setTask1] = useState('');
   const name = (task) => {
     setTask1(task)
   }
   
    return {task1,name}
}

export default useFunction
