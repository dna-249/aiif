import React, { useEffect, useState } from 'react'
import Header from './header'
import useRegistration from './useRegistration'
const Registration = () => {
    const [first,setFirst,handleFirst]=useRegistration ('')
    const [surname,setSurname,handleSurname]=useRegistration('')
    const [birth,setBirth,handleBirth] = useRegistration ('')
    const [sex,setSex,handleSex]= useRegistration('')
    const [occupation,setOccupation,handleOccupation] = useRegistration('')
    const [phone,setPhone,handlePhone]=useRegistration ('')
    const [parent,setParent,handleParent]= useRegistration('')
    const [address,setAddress,handleAddress]= useRegistration('')
    const [origin,setOrigin,handleOrigin]= useRegistration('')
    const [nationality,setNationality,handleNationality]= useRegistration('')
    const [program,setProgram,handleProgram] = useRegistration('')
    
    const [form,setForm] = useState([''])
    const [form2,setForm2] = useState('')


    const handleForm = () => {
      setForm(()=>[first,surname,birth,sex,occupation,phone,parent,address,origin,nationality,program])
      handle()
    }
    
 const handle = (params) => {
  const data = JSON.parse(localStorage.getItem('Nura'))
   setForm2(data)
 }
 
   useEffect(()=>{
    localStorage.setItem(first,JSON.stringify(form))
   },[form]) 
  return (
   <>
   <Header />
   <div className="cont-registration">
    <div className="registration">
        <div className='registration1'>
            <h2 onClick={()=>handleForm()}>Registration {form2}</h2>
             <div style={{margin:'auto',display:'grid'}}>
                <h5 style={{margin:'auto',display:'grid'}}>Please provide the following information accurately.</h5>
           
                <ol><h3>Personal Data:</h3>
       <li><label> First Name:  {first}
                <input required type="text" className='input' onChange={(e) => handleFirst(e)}/>
            </label></li>

       <li><label> Surname Name:  {surname}
                <input required type="text" className='input' onChange={(e) => handleSurname(e)} />
            </label></li>

        <li><label> Date of Birth: {birth}
                <input required type="text" className='input' onChange={(e)=>handleBirth(e)}  />
            </label></li>

        <li><label>Sex:{sex}
            <select className='input' onChange={(e)=>handleSex(e)}>
                <option  value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </select></label></li>

            <li><label>Name of Parent/Guardian:
                <input required type="text" className='input' onChange={(e)=>handleParent(e)}  />
            </label></li>

            <li><label> Parent's Occupation:
                <input required type="text" className='input' onChange={(e)=>handleOccupation(e)} />
            </label></li>

            <li><label> State of Origin:
                <input required type="text" className='input' onChange={(e)=>handleOrigin(e)}/>
            </label></li>

            <li><label> Nationality:
                <input required type="text" className='input'onChange={(e)=>handleNationality(e)} />
            </label></li>
            
            <li><label> Contact Address:  
            </label></li>
             <textarea required type="text" className='input' onChange={(e)=>handleAddress(e)} />
             
            <li><label> Phone Number:
                <input required type="text" className='input' onChange={(e)=>handlePhone(e)} />
            </label></li>
            </ol>
             <h2>Program Section</h2>
             <ul>
                <h3>Select Program type: {program}</h3>
             <li className='input'>Tahfeez & Islamiyyah <br /> Sat. and Sun(8.30pm - 4.30pm) <br /> Mon. Tue. Wed. (4.30pm - 6.00pm) <br />
             <input required type="checkbox" value='Tahfeez & Islamiyyah' checked={program === 'Tahfeez & Islamiyyah'} onChange={(e)=>handleProgram(e)}  style={{height:'20px',width:'20px'}}/></li>   
             
             <li className='input'> Intensive Full-time Tahfeez <br /> Sat. to Thur(8.00pm - 4.00pm) <br />Subject to Time and Expense Negotiation <br />
             <input required type="checkbox" value='Intensive Full-time Tahfeez' checked={program === 'Intensive Full-time Tahfeez'} onChange={(e)=>handleProgram(e)} style={{height:'20px',width:'20px'}}/></li>

             <li className='input'>Women Section(Working Class) <br /> Sat. and Sun(10.30pm - 1.00pm) <br /> 
             <input required type="checkbox" value='Women Section(Working Class)' checked={program === 'Women Section(Working Class)'} onChange={(e)=>handleProgram(e)} style={{height:'20px',width:'20px'}}/></li>   
            
             <li className='input'>Women Section(Non-Working Class) <br /> Mon. Tue. Wed.(10.30pm - 12.30pm) <br />
             <input required type="checkbox"value='Women Section(Non-Working Class)' checked={program === 'Women Section(Non-Working Class)'} onChange={(e)=>handleProgram(e)} style={{height:'20px',width:'20px'}}/></li>   
            
             <li className='input'>Adult Qur'an and Arabic Class <br /> (One-and-One Class)<br /> Subject to Time Negotiation <br />
             <input required type="checkbox"value='Adult Quran and Arabic Class' checked={program === 'Adult Quran and Arabic Class'} onChange={(e)=>handleProgram(e)} style={{height:'20px',width:'20px'}}/></li>   
            
             <li className='input'>Extra and Online Class <br /> Subject to Time and Expenses Negotiation <br />
             <input required type="checkbox" value='Extra and Online Class' checked={program === 'Extra and Online Class'} onChange={(e)=>handleProgram(e)} style={{height:'20px',width:'20px'}}/></li>   
            
             </ul>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Registration