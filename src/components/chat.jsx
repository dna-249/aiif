import React from 'react'
import { useState } from 'react'
const Chat = ({mar}) => {
const [color, setColor] = useState('hi')
const [colors, setColors] = useState('hi')
const [count, setCount] = useState(0)
    const handleColor = () => {
    setColor(()=> "nura")
    setColors((prev)=> !prev)
    }
    const handleCount = () => {
      setColor(()=> 'mary' )
      setCount(count * 75 + 25 - count)

    }
    
  return (
    <>
    <div style={{backgroundColor:`#${count}` }}>
       <h1>{mar && <div className={colors? "":"green"} onClick={handleColor}>{mar}</div>}</h1>
     <button onClick={handleColor}> {color} </button>
     <button onClick={handleCount}>{count}</button>
        </div>
        </>
  )
}

export default Chat