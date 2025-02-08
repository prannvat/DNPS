// src/themes/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D47A1', // Deep Blue
    },
    secondary: {
      main: '#00838F', // Teal
    },
    accent: {
      main: '#FFB300', // Gold
    },
    background: {
      default: '#f5f5f5', // Light gray background
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;