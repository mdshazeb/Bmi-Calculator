import { isFocusable } from '@testing-library/user-event/dist/utils';
import React, { Component ,useState,useEffect} from 'react';
import './App.css';
 

function App(){
 const [height,setHeight]=useState(0)
 const [weight,setWeight]=useState(0)
 const [Bmi,setBmi]=useState(0)
 const [isValue,setisValue]=useState(false)
 const [msg,setMsg]=useState("")

 useEffect(()=>{
  if(Bmi<18.5)
     setMsg("you are under weight")

     else if(Bmi>=18.5 && Bmi < 25)
     setMsg("you are Normal Weight")

     else if(Bmi>=25 && Bmi <=29.9)
     setMsg("you are Over Weight")

     else
     setMsg("you are Obese")

 },[Bmi])
  function update(){
    if(height>0 && weight>0)
    {setBmi((weight*100**2/(height**2)).toFixed(1))
     setisValue(true)

    
  }

    else
    alert("give valid input")
  }

  return(
    <div className='main'>
      <h1 className='heading'>BMI Tracker</h1>

      <p className="wh">Weight (in kg)</p>
      <input type="number" className="weight" placeholder="50" onChange={(e)=>setWeight(e.target.value)}></input>
      <p className="wh2">Height (in cm)</p>
      <input type="number" className="height" placeholder="176" onChange={(e)=>setHeight(e.target.value)}></input>
      <div className="container">
        <button className="btn" onClick={update}>Calculate BMI</button>
        </div>
      {isValue? <div className='parent'><div className="container2"><h2>Date is {new Date().toLocaleString().split(',')[0]}</h2><h2>Your Bmi is {Bmi}</h2><h2>{msg}</h2></div></div>:null}

    </div>  
  )

}



export default App
