import React from 'react'
import {NavLink} from "react-router-dom";
import './nbar.css'
function Navbar() {
  return (
    <div>
 <nav class="navbar">

 <div class="logo">Express</div>
 <ul class="nav-links" >
 <input type="checkbox" id="checkbox_toggle" />
 <label for="checkbox_toggle" class="hamburger">&#9776;</label>
 <div class="menu">
 <li><NavLink to='/'>Home</NavLink></li>
 <li><NavLink to='/about'>About</NavLink></li>
 <li class="services">
 <NavLink to='/'>Server</NavLink>
 <ul class="dropdown">
 <li><NavLink to='/'>Home1</NavLink></li>
 <li><NavLink to='/'>Home2</NavLink></li>
 <li><NavLink to='/'>Home3</NavLink></li>
 <li><NavLink to='/'>Home4</NavLink></li>
 <li><NavLink to='/'>Home5</NavLink></li>
 </ul>
 </li>
 <li><NavLink to='/Contact'>Contact</NavLink></li>
 </div>
 </ul>
 </nav>
    </div>
  )
}

export default Navbar;