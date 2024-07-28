import { createTheme } from '@mui/material/styles';

export const dayTheme = createTheme({
  palette: {
    mode: 'light', // specify light mode
    primary: {
      main: '#121212',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
    link: {
      primary: '#fff', 
      secondary: '#dc004e', // secondary link color for day theme
    },
    outlined: {
      main: '#fff',
    },
    navbar: {
      main: '#446678',
    },
  },
});

export const nightTheme = createTheme({
  palette: {
    mode: 'dark', // specify dark mode
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#282c34',
    },
    text: {
      primary: '#ffffff',
    },
    link: {
      primary: '#1976d2', 
      secondary: '#34e999', 
    },
    outlined: {
      main: '#fff',
    },
    navbar: {
      main: '#888888',
    },
  },
});
