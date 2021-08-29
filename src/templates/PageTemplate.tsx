import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import ThemeProvider from 'components/ThemeProvider';
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  main {
    min-height: 80vh;
  }
`;

const PageTemplate = ({ children }) => {
  return (
    <ThemeProvider>
      <Page>
        <SEO />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default PageTemplate;
