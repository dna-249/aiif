import React from 'react'
import { useState } from 'react'
import Chat from './components/chat'

const Student = ({mar}) => {
    const [show, setShow] = useState(true)
    const handleShow = () => {
        setShow((prev)=>!prev)
    }
    
  return (
    <>
    <div>
        {show? (<div><h3 onClick={handleShow}>{mar}</h3></div>):(
        <div className='student'>
        {mar && <div className='img'>{mar.slice(0,1).toUpperCase()}</div>}
        <h3 onClick={handleShow} >{mar}</h3>
        <Chat mar={mar} />
        </div>)}
    </div>
    </>
  )
}

export default Student