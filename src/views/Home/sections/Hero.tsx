import { Container, Typography } from '@material-ui/core';
import Button from 'components/Button';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const HeroSectionBg = styled.section`
  background-color: #001f3c;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 75vh;
`;

const HeroTypewriter = styled.div`
  * {
    display: inline;
  }
`;

const HeroBio = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px 0;
`;

const HeroBtns = styled.div`
  margin: 25px 0;
  margin-left: -15px;
  & > * {
    margin-left: 15px;
  }
`;

const Hero = () => {
  return (
    <HeroSectionBg>
      <Container>
        <HeroWrapper>
          <Typography variant="h5">Hello, World! I'm</Typography>
          <Typography variant="h1">Gabriel Ting</Typography>
          <HeroTypewriter>
            <Typography variant="h3">
              Aspiring&nbsp;
              <Typewriter
                options={{
                  strings: ['software engineer', 'student'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 40,
                }}
              />
            </Typography>
          </HeroTypewriter>
          <HeroBio>
            <Typography variant="subtitle1">
              I am a final year UNSW computer science student with the skillset
              of a frontend software engineer!
            </Typography>
          </HeroBio>
          <HeroBtns>
            <a href="mailto:gabrielting.info@gmail.com">
              <Button>Get In Touch</Button>
            </a>
            <a href="/resume.pdf" download>
              <Button>View Resume</Button>
            </a>
          </HeroBtns>
        </HeroWrapper>
      </Container>
    </HeroSectionBg>
  );
};

export default Hero;
