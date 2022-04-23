// import React, { Fragment } from 'react';
// import { render } from "react-dom";
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from "./Navbar";
import NotFound from "./Components/NotFound";
import User from "./user.js"

function App() { 
    return ( 
        <div className="App">
           <BrowserRouter>
           <Navbar/>
            <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            {/* <Route path = "/*" element = {<NotFound/>}/> */} 
            <Route path = "/*" element = {<Navigate to='/'/>}/>
            <Route path = "/user/:name" element = {<User/>}/>
            
            </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App;