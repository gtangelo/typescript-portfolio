import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';

const FooterBg = styled.footer`
  width: 100%;
  background-color: #0f1624;
`;

const FooterWrapper = styled.div`
  padding: 30px;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterBg>
      <Container>
        <FooterWrapper>
          <Typography variant="body1" align="center">
            Made with ❤ using Gatsby
          </Typography>
        </FooterWrapper>
        {/* <a href="https://github.com/gtangelo" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/gabriel-ting/" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:gabrielting.info@gmail.com" target="_blank">
          Email
        </a> */}
      </Container>
    </FooterBg>
  );
};
export default Footer;
