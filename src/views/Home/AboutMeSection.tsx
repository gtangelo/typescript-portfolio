import { Container, Typography } from '@material-ui/core';
import TitleHeader from 'components/TitleHeader';
import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    flex: 1;
  }
`;

const AboutMeInfo = styled.div``;

const AboutMeSection = () => {
  return (
    <Container maxWidth="md">
      <AboutMeWrapper>
        <AboutMeInfo>
          <TitleHeader title="About Me" />
          <Typography variant="body1" component="p">
            Hello! I'm Gabriel, currently a penultimate year computer science student and I'm
            passionate in areas of full stack development and security.
          </Typography>
        </AboutMeInfo>
        <img src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl_400x400.jpg" />
      </AboutMeWrapper>
    </Container>
  );
};

export default AboutMeSection;
