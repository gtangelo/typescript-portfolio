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
      fontSize: '3.3rem',
      // fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '2.2rem',
      // fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '2rem',
      // fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '35px',
    },
    h4: {
      fontFamily: headingFont,
      fontSize: '1.7rem',
      // fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: headingFont,
      fontSize: '1.5rem',
      // fontWeight: 'bold'
    },
    h6: {
      fontFamily: headingFont,
      fontSize: '1.2rem',
      // fontWeight: 'bold'
    },
    subtitle1: {
      fontFamily: bodyFont,
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
    subtitle2: {
      fontFamily: bodyFont,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: bodyFont,
      fontSize: '1.1rem',
      lineHeight: 2.1,
      marginBottom: '20px',
    },
    body2: {
      fontFamily: bodyFont,
      fontSize: '1rem',
      lineHeight: 1.65,
    },
  },
});

theme = responsiveFontSizes(theme);

const ThemeProvider: React.FC = ({ children }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
