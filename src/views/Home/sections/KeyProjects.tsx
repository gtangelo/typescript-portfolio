import { Box, Container } from '@material-ui/core';
import { ProjectCard } from 'components/Card';
import TitleHeader from 'components/TitleHeader';
import React from 'react';
import styled from 'styled-components';
import PROJECTS from 'data/projects';

const HighlighSection = styled.section`
  padding: 30px 0;
`;

const KeyProjects = () => {
  return (
    <HighlighSection id="projects">
      <Container>
        <TitleHeader title="Selected Projects" />
      </Container>
      <Container>
        {PROJECTS.map((project, index) => (
          <Box my={4} key={project.title}>
            <ProjectCard
              key={project.title}
              position={index}
              title={project.title}
              description={project.description}
              img={project.img}
              categories={project.categories}
              github={project.github}
              deploy={project.deploy}
            />
          </Box>
        ))}
      </Container>
    </HighlighSection>
  );
};

export default KeyProjects;
