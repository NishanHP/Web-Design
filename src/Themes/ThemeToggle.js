import React, { useEffect } from 'react';
import { useThemeContext } from '../Context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './ThemeToggle.css';
import nightTogle from '../images/nightTogle.png'
import dayTogle from '../images/dayTogle.png'

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add('darkmode');
    } else {
      body.classList.remove('darkmode');
    }
  }, [darkMode]);

  return (
    <button onClick={toggleTheme} className="btn" style = {{backgroundImage: `url(${darkMode ? nightTogle : dayTogle}`}}
    >
      <div className="btn__indicator">
        <div className="btn__icon-container">
          {darkMode ? <DarkModeIcon className="btn__icon" /> : <LightModeIcon className="btn__icon" />}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
