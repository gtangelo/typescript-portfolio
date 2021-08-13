import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
`;

const PageTemplate: React.FC = ({ children }) => {
  return (
    <Page>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Page>
  );
};

export default PageTemplate;
