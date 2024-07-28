// App.js
import React, { useEffect, useRef } from 'react';
import './App.css';
import video from './images/video.mp4';
import Navigation from './Components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const doorOpenPosition = 20; 

      if (scrollPosition > doorOpenPosition) {
        leftDoorRef.current.classList.add('open');
        rightDoorRef.current.classList.add('open');
      } else {
        leftDoorRef.current.classList.remove('open');
        rightDoorRef.current.classList.remove('open');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="door-container">
        <nav className="navbar">
          <Navbar/>
        </nav>
        <div className="door left-door" ref={leftDoorRef}></div>
        <div className="door right-door" ref={rightDoorRef}></div>
      </div>
      <div className='sec2'>
        <p>This is temporary section which is used to fix height.</p>
      </div>
      <div className="background-section">
        <video autoPlay muted loop className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-section">
        <h1>Welcome to My Website</h1>
        <p>This content appears after the doors open.</p>
      </div>
      <div className='sec1'>
        <p>This is temporary section which is used to fix height.</p>
      </div>
    </div>
  );
}

export default App;
