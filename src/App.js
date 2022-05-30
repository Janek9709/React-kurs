import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import MenuIcon from '@mui/icons-material/Menu';
import { InputForm } from './InputForm.tsx';
import { Aboutpage } from './about/Aboutpage.js';
import { Contactpage } from './contact/Contactpage.js';
import { Landingpage } from './landing/Landingpage.js';
import { Projectspage } from './projects/Projectspage';

export const routesPaths = {
  about: 'about'
}



function App() {


  const toggleFunction = () => {
    var x = document.getElementsByClassName('App-links')[0]
    if (x.style.display === "flex"){
      x.style.display = "none";
    }else {
      x.style.display = "flex";
    }
  }

  return (
    <div className="App">
      
    


        {/* <header className='App-header'>
            <InputForm defaultValue={'hello form'} />
        </header> */}

        <nav className='nav'>
        <a href='https://github.com/Janek9709/React-kurs'>LinkDoRepo</a>
        <MenuIcon id='Btn-toggle' onClick={toggleFunction}/>
          <ul className='App-links'>
            <li><Link className='App-nav' to="/">Home</Link></li>
            <li><Link className='App-nav' to="/landing">Landing Page</Link></li>
            <li><Link className='App-nav' to="/about">About us</Link></li>
            <li><Link className='App-nav' to="/contact">Contact</Link></li>
            <li><Link className='App-nav' to="/projects">Projects</Link></li>
          </ul>
          
          
          
          
          
        </nav>

        <button onClick={() => alert("hello react")}>ClickMe!</button>
        

        <Routes>
          <Route path="/" element={<InputForm defaultValue={'hello form'} />} />
          <Route path='/landing' element={<Landingpage />}/>
          <Route path={`/${routesPaths.about}`} element={<Aboutpage />}/>
          <Route path='/contact' element={<Contactpage />}/>
          <Route path='/projects' element={<Projectspage />}/>
        </Routes>

    </div>
  );
}

export default App;
