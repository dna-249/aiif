import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Update = () => {

  const noPost = () => {
    const postNo =  JSON.parse(localStorage.getItem('post'));
    if(postNo == ''){return "no post"} else {return <div style={{
                                                     color:"white",
                                                     backgroundColor:'green',
                                                     padding:'5px',
                                                     textAlign:"center"
    }}> {postNo.length + 'posts'} </div>}
  }
  
  const [select, setSelect] = useState('')
  const [select1, setSelect1] = useState('')
  const [select2, setSelect2] = useState('')
  const [select3, setSelect3] = useState('')
  const [select4, setSelect4] = useState(noPost())

  const postUpdate = () => {
    if(select3 !== ''){
    setSelect2((select2)=>[...select2,select3])
    }
    
  } 
  useEffect(()=>{
    if(select3 !== ''){
    setSelect4(()=> noPost())
    }
    localStorage.setItem('post',JSON.stringify(select2))
    localStorage.setItem('post-to',JSON.stringify(select))
    setSelect3("")
    
  },[select2,select])
  return (<>
<div className='admin-header' > DashBoard </div>
    <div className='cont-admin'>
        <div className="admin-icon">
            <div><Link to={'/'}>Home</Link>  </div>
            <div><Link to={'/programs'}>Program</Link></div>
            <div><Link to={'/staff'}>Staff</Link></div>
            <div><Link to={'/exam'}> Examination</Link></div>
            <div><Link to={'/ca'}>C/A</Link></div>
            <div><Link to={'/update'}>Update</Link></div>
        </div>
        <div className="admin-icon2"> 
             <div className='admin-row' style={{overflowY:'scroll',height:'450px',overflowX:'hidden'}}> <div> icons</div>
             <div> icons</div>
             <div> icons</div>
             <div> icons</div>
             <div> icons</div>
             <div> icons</div>
              </div>
             <div style={{overflowY:'scroll',height:'450px',overflowX:'hidden'}}>
              
             <div className='admin-headers'>Update</div>
             <div className='select2'>
             <div>Update to:
              <select onChange={(e)=>setSelect(e.target.value)}>
                <option value="Management">Management</option>
                <option value="Academic">Academic</option>
                <option value="Parent">Parent</option>
                <option value="Student">Student</option>
                <option value="All"> All</option>
              </select>
             </div>
             <div> Previous updates to:
              <select onChange={(e)=>setSelect1(e.target.value)}>
                <option value="Management">Management</option>
                <option value="Academic">Academic</option>
                <option value="Parent">Parent</option>
                <option value="Student">Student</option>
                <option value="All"> All</option>
              </select>
             </div>
             </div>
             
             <div>
              <h5> To:{select}</h5>
              <textarea cols={40} rows={10}  onChange={(e)=>setSelect3(e.target.value)}
              value={select3} placeholder='write update...'></textarea> <br /> <button onClick={()=>postUpdate()}>post-update</button>
              <h5>{select1} Previous Update </h5>
              <h5>{select1}</h5>
              {select2}
             </div>
             
              
               </div>
             <div> Notifications <br />
                {select4}  </div>
        </div>
    </div>



  
  </>)
}

export default Update