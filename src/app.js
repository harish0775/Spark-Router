// import React, { Fragment } from 'react';
// import { render } from "react-dom";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Basic/Components/Home';
import About from './Basic/Components/About';
import Contact from './Basic/Components/Contact';
import Navbar from "./Navbar";
import Inter from './Intermediate/SearchParams';
import Server from './Basic/Components/server';
import Camp from './Basic/Components/camp';
import Validation from './Basic/Validation/Login';
// import NotFound from "./Basic/Components/NotFound";
import Protected from "./Basic/protected.js";

function App() { 
    return ( 
        <div className="App">
           <BrowserRouter>
           <Navbar/> 
            <Routes>
            
            <Route path = "/" element = {<Protected Components={Home}/>}/>
            <Route path = "/" element = {<Protected Components={Home}/>}/>
            <Route path = "/about" element = {<Protected Components={About}/>}/>
            <Route path = "/*" element = {<Protected Components={Home}/>}/>
            {/* <Route path = "/user/:name" element = {<User/>}/> */}
            <Route path = "/inter" element = {<Protected Components={Inter}/>}/>
            <Route path = "/contact/" element = {<Protected Components={Contact}/>}>
                  <Route path = "server" element = {<Server/>}/>
                  <Route path = "camp" element = {<Camp/>}/>
            </Route>
            <Route path = "/Login" element = {<Validation/>}/>
            </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App;