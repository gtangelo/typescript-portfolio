import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import { Box } from '@material-ui/core';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import KeyProjects from './sections/KeyProjects';
// import RecentPosts from './RecentPosts';

const HomePage = () => {
  return (
    <PageTemplate>
      <Hero />
      <Box id="about">
        <AboutMe />
      </Box>
      <Box id="projects">
        <KeyProjects />
      </Box>
      {/* <Box id="blog">
        <RecentPosts />
      </Box> */}
    </PageTemplate>
  );
};

export default HomePage;
