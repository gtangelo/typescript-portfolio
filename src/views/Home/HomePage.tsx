import HeroSection from 'views/Home/HeroSection';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import { Box } from '@material-ui/core';
import SelectedProjectsSection from './SelectedProjectsSection';
// import RecentPostsSection from './RecentPostsSection';
import AboutMeSection from './AboutMeSection';

const HomePage: React.FC = () => {
  return (
    <PageTemplate>
      <HeroSection />
      <Box id="about">
        <AboutMeSection />
      </Box>
      <Box id="projects">
        <SelectedProjectsSection />
      </Box>
      {/* <Box id="blog">
        <RecentPostsSection />
      </Box> */}
    </PageTemplate>
  );
};

export default HomePage;
