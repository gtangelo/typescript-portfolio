import { Box, Container, Typography } from '@material-ui/core';
import Button from 'components/Button';
import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const HeroSectionBg = styled.section`
  background-color: #fafafa;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroSectionBg>
      <Container>
        <HeroWrapper>
          <Typography component="h4" variant="h4">
            Hello, World! I'm
          </Typography>
          <Typography component="h1" variant="h1">
            Gabriel Ting
          </Typography>
          <Typography component="h3" variant="h3">
            <Box display="flex">
              Aspiring&nbsp;
              <Typewriter
                options={{
                  strings: ['software engineer.', 'student.'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 40,
                  pauseFor: 2000,
                }}
              />
            </Box>
          </Typography>
          <Typography component="p" variant="subtitle1">
            I am a UNSW computer science student in my penultimate year aspiring to become as a
            frontend web developer!
          </Typography>
          <div>
            <Button>Get In Touch</Button>
            <Button>Resume</Button>
          </div>
        </HeroWrapper>
      </Container>
    </HeroSectionBg>
  );
};

export default HeroSection;
