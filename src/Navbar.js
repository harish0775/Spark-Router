import React from 'react'
import {NavLink} from "react-router-dom";
function Navbar() {
  return (
    <div>

        <NavLink to='/'>Home</NavLink><br/>
        <NavLink to='/about'>About</NavLink><br/>
        <NavLink to='/contact'>Contact</NavLink><br/>
        <NavLink to='/user/harish'>Harish</NavLink><br/>
        <NavLink to='/user/krish'>Krish</NavLink><br/>
        <NavLink to='/inter'>Inter</NavLink><br/>
    </div>
  )
}

export default Navbar;