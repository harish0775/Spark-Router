import React from 'react'
import { Outlet,Link,Fragment } from 'react-router-dom'
import './home.css'
 function Contact() {
//   const nagivate = useNavigate();
//   const navigateto=()=>{
//      const x = false;
//      if(x == false){
//       nagivate('./about')
//      }else{
//       nagivate('./contact')
//      }
//   }

//   const navigateton=()=>{
//     const x = false;
//     if(x == false){
//      nagivate('./contact')
//     }else{
//      nagivate('./about')
//     }
//  }
  return (
    <>
         <h1>Contact</h1>
         
         
  <Link  to="server">Server</Link>
 <Link  to="home">Home</Link>
<Link  to="camp">camp</Link>

  <Outlet/>     
    </>
  )
}
export default Contact;