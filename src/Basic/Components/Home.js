import React from 'react'
import { useNavigate } from 'react-router-dom'

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
  return (
    <div>
         <h1>Home</h1>
         <button onClick={()=>navigateto()}>Geo-Location</button>
         <button onClick={()=>navigateto()} >Elem-Area</button>
    </div>
  )
}
export default Home;