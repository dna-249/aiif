import React, { useEffect } from 'react'
import { useState } from 'react'
const Exam = () => {
    const [exam, setExam] =useState('')
 const [exam2, setExam2] =useState('')

    const quizData = [
        {},
        {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
            
        },
        {
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
            
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
            
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
           
        },
    ];


    let dataNum = 0; 
const handleExam = () => {
     dataNum++; 

   console.log(dataNum);
   if((dataNum)&&(dataNum < quizData.length)){
   setExam(()=>
   <>
    <div > {exam2}
   <h3>{quizData[dataNum].question}</h3>

   <input type="radio" name="nur" value="a" id='nur' checked={exam2 === 'a'} onChange={(e)=>setExam2(e.target.value)}/>
   <label htmlFor="a">{quizData[dataNum].a }<br /> </label>

    <input type="radio" name="" value="b"  checked={exam2 === 'b'}  onChange={(e)=>setExam2(e.target.value)} />
   <label htmlFor="b"> {quizData[dataNum].b} </label><br /> 

   <input type="radio" name="" value="c" checked={exam2 === 'c'} onChange={(e)=>setExam2(e.target.value)}/>
   <label htmlFor="c">{quizData[dataNum].c }</label><br /> 

   <input type="radio" name="" value="d" checked={exam2 === 'd'} onChange={(e)=>setExam2(e.target.value)} />
   <label htmlFor="d">{quizData[dataNum].d}</label> <br /> 
   
   <button onClick={handleExam}>next</button>
    
    </div>
    </>)}
    else {
       
        setExam(()=>
        <div> finished <br /> your score {score}</div>
    )
    }handleRadio()
}
let score = 0;
const handleRadio = () => {
    
    dataNum++
  if(exam2 === quizData[dataNum].correct){
    score++;
    console.log(score);
  } 
};
useEffect(()=>{
  if(exam2){
    handleExam()
    
  }  
},[exam2])
  return (
    <>
    <div className='check'>
            {exam}
    <button onClick={handleExam}> start</button>
    
    </div>
    </>
  )
}

export default Exam
