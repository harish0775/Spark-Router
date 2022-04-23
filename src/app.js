// import React, { Fragment } from 'react';
// import { render } from "react-dom";
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Home from './Basic/Components/Home';
import About from './Basic/Components/About';
import Contact from './Basic/Components/Contact';
import Navbar from "./Navbar";
import Inter from './Intermediate/SearchParams';
// import NotFound from "./Basic/Components/NotFound";
import User from "./Basic/user.js"
// import About from "./Basic/Components/About";
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
            <Route path = "/inter" element = {<Inter/>}/>
            </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App;