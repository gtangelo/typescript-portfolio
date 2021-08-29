import React from 'react';
import {
  ThemeProvider as Provider,
  createTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

const headingFont = 'sans-serif';
const bodyFont = 'sans-serif';

let theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'sans-serif',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontFamily: headingFont,
      fontSize: '4.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '3.2rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '2.3rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: headingFont,
      fontSize: '1.7rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: headingFont,
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: headingFont,
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontFamily: bodyFont,
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily: bodyFont,
      fontSize: '0.8rem',
    },
    body1: {
      fontFamily: bodyFont,
      fontWeight: 500,
      fontSize: '1rem',
      marginBottom: '15px',
    },
    body2: {
      fontFamily: bodyFont,
      fontWeight: 500,
      fontSize: '0.9rem',
      marginBottom: '5px',
    },
  },
});

theme = responsiveFontSizes(theme);

const ThemeProvider = ({ children }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
