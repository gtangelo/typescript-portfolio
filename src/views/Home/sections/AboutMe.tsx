import { Container, Grid, Typography } from '@material-ui/core';
import TitleHeader from 'components/TitleHeader';
import React from 'react';
import styled from 'styled-components';
import me from 'assets/images/me.jpg';

const AboutMeGrid = styled(Grid)`
  padding: 80px 0;
`;

const AboutMeImg = styled.img`
  height: 350px;
  object-fit: cover;
  width: 100%;
`;

const AboutMeInfo = styled.div`
  padding: 20px;
`;

const AboutMe = () => {
  return (
    <Container maxWidth="md" id="about">
      <AboutMeGrid container>
        <Grid item md={8} xs={12}>
          <AboutMeInfo>
            <TitleHeader title="About Me" />
            <Typography variant="body1">
              Hello! I'm Gabriel, a penultimate year computer science student. I'm
              passionate in areas of full stack development and security. Currently, I'm working as
              a full time Junior Software Engineer at a startup called Particular Audience.
            </Typography>
            <Typography variant="body1">
              Apart from my academic achievements, I actively engage in a wide range of personal and
              professional development opportunities throughout my study at UNSW. Throughout my past
              university experiences, I volunteered my time at societies such as being Projects
              Director at the UNSW Security Society in 2021.
            </Typography>
            <Typography variant="body1">
              Otherwise, in my spare time, I am passionate to explore further what computer science
              has to offer by watching various videos on different programming topics on the
              internet. Furthermore, I love exploring new places around Sydney, whether it be hiking
              or trying new restaurants to eat at!
            </Typography>
          </AboutMeInfo>
        </Grid>
        <Grid item md={4} xs={12}>
          <AboutMeImg src={me} />
        </Grid>
      </AboutMeGrid>
    </Container>
  );
};

export default AboutMe;
