import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import ThemeProvider from 'components/ThemeProvider';
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  main {
    min-height: 80vh;
  }
`;

const PageTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <Page>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default PageTemplate;
