import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
 function Home() {
  const nagivate = useNavigate();
  const navigateto=()=>{
     const x = false;
     if(x == false){
      nagivate('./about')
     }else{
      nagivate('./contact')
     }
  }

  const navigateton=()=>{
    const x = false;
    if(x == false){
     nagivate('./contact')
    }else{
     nagivate('./about')
    }
 }
  return (
    <div>
         <h1>Home</h1>
         
         
         
         <div className ="header">
         <h1>Home</h1>
  <p>Just wait New Feature Roled Out</p>
  <button onClick={()=>navigateto()}>About Botton</button>
  <button onClick={()=>navigateton()} >Contact</button>
</div>
    </div>
  )
}
export default Home;