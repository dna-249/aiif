import React from 'react'
import { useState } from 'react'
const Post = () => {
    const get = () => {
      const data = JSON.parse(localStorage.getItem('post'))
      return data
    }
    const to = () => {
        const data = JSON.parse(localStorage.getItem('post-to'))
        return data
      }
    
    const [data] = useState(get())
    const [dataTo] = useState(to())
  return ( <>
    <div className='admin-header'>
        <div> Post</div>
        <div>...</div>
    </div>
    <div className='cont-post'> 
              <div><h5>Notice!!! <br />To: {dataTo}</h5> <br /> {data}</div>
         </div>
  </>)
}

export default Post