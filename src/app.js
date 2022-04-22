// import React, { Fragment } from 'react';
// import { render } from "react-dom";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from "./Navbar";
function App() { 
    return ( 
        <div className="App">
           <BrowserRouter>
           <Navbar/>
            <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App;