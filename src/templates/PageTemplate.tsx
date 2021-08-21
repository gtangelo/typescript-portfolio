import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import styled from 'styled-components';
// import 'assets/styles/global.css';

const Page = styled.div`
  main {
    min-height: 80vh;
  }
`;

import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';

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
      fontSize: '4.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginTop: '10px',
      marginBottom: '10px',
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontWeight: 500,
      fontSize: '1rem',
      marginBottom: '5px',
    },
    body2: {
      fontWeight: 500,
      fontSize: '0.9rem',
      marginBottom: '5px',
    },
  },
});

theme = responsiveFontSizes(theme);

const PageTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default PageTemplate;
