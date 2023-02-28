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
              Hello! I'm Gabriel, a final year computer science student. My expertise
              lies in frontend development, however I'm also curious in areas of full stack
              web dev! My work experience is broad ranging from working for small businesses,
              startups and big tech companies!
            </Typography>
            <Typography variant="body1">
              I also am passionate in enaging within my university community through student
              run societies. In 2021, I was the Projects Director at the UNSW Security Society
              where I was involved revamping their&nbsp;
              <strong>
                <a href="https://unswsecurity.com/" target="_blank" rel="noopener noreferrer">website</a>
              </strong>
              &nbsp;and maintaing their cloud infrastructure. In more recent years, I have been
              involved within UNSW CSESoc Development as one of their Projects Directors for&nbsp;
              <strong>
                <a href="https://circles.csesoc.app/" target="_blank" rel="noopener noreferrer">
                  Circles
                </a>
              </strong>
              &nbsp;and&nbsp;
              <strong>
                <a href="https://jobsboard.csesoc.unsw.edu.au/" target="_blank" rel="noopener noreferrer">
                  Jobsboard
                </a>
              </strong>
              !
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
