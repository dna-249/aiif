import React, { useEffect } from 'react'
import { useState } from 'react'
import useFunction from './useFunction'
import Chat from './chat'
import Student from '../student'
const Map = () => {
const [input, setInput] = useState('')
const [show, setShow] = useState('')
const [color, setColor] = useState(null)
const [input1, setInput1] = useState('')
const [inputs, setInputs] = useState([])
  
const handleShow = (params) => {
  setShow("hide")
}


    
 
    const func = ()=> {
        
        setInputs((inputs)=> [...inputs,input])
    }
   


  return (
    <>

    <div > <h1>input Data</h1>
        <input type="text" onChange={(e)=> setInput(e.target.value)} />
        <button onClick={func}>Data</button>

        <h3>{inputs.map((mar,index)=>
        <div  key={index}>
          <div  onClick={handleShow}><Student mar ={mar}/></div>
        </div>
          
             )}
        </h3>
        
    </div>
    </>
  )
}

export default Map