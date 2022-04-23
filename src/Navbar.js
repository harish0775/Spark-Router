import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div>

        <Link to='/'>Home</Link><br/>
        <Link to='/about'>About</Link><br/>
        <Link to='/contact'>Contact</Link><br/>
        <Link to='/user/harish'>Harish</Link><br/>
        <Link to='/user/krish'>Krish</Link>
    </div>
  )
}

export default Navbar;