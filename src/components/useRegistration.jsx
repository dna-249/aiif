import React, { useState,useEffect } from 'react'

const useRegistration = (val) => {
  const [user,setUser]=useState(val);
  
  const handleUser = (e) => {
      setUser(e.target.value)
    }

  return [user,setUser,handleUser]
}

export default useRegistration