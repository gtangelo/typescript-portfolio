import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #222;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <a href="https://github.com/gtangelo" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/gabriel-ting/" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:gabrielting.info@gmail.com" target="_blank">
          Email
        </a>
        <Typography component="p" variant="body1">
          Made with ❤ using Gatsby
        </Typography>
      </Container>
    </FooterWrapper>
  );
};
export default Footer;
