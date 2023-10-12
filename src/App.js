import React from 'react';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Headerbar from './JS/Headerbar';
import Content from './JS/Content';
import Home from './JS/Home';
import About from './JS/About';
 function App() {
  return (
    <div>
    <nav>
      <ul> 
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        </ul>
    </nav>
        <Routes>
          <Route path="/" element={<Headerbar/>}/>
          <Route path="/About" element={<Content/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
