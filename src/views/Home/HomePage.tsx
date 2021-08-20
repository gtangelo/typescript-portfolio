import HeroSection from 'views/Home/HeroSection';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import SelectedProjectsSection from './SelectedProjectsSection';
import RecentPostsSection from './RecentPostsSection';
import AboutMeSection from './AboutMeSection';

const HomePage: React.FC = () => {
  return (
    <PageTemplate>
      <HeroSection />
      <AboutMeSection />
      <SelectedProjectsSection />
      <RecentPostsSection />
    </PageTemplate>
  );
};

export default HomePage;
