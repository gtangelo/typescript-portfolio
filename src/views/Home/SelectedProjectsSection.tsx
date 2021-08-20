import { Box, Container } from '@material-ui/core';
import { ProjectCard } from 'components/Card';
import TitleHeader from 'components/TitleHeader';
import React from 'react';
import styled from 'styled-components';

const HighlighSection = styled.section`
  padding: 30px 0;
`;

const HightlightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > * {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 786px) {
    & > * {
      width: 31%;
    }
  }
`;

const SelectedProjectsSection: React.FC = () => {
  return (
    <HighlighSection>
      <Container>
        <TitleHeader title="Selected Projects" />
        <HightlightWrapper>
          {new Array(3).fill(0).map((i) => (
            <ProjectCard
              key={i}
              title="RESTful API"
              description="hi there"
              img="https://gabrielting.xyz/traceback-banner.png"
            />
          ))}
        </HightlightWrapper>
      </Container>
    </HighlighSection>
  );
};

export default SelectedProjectsSection;
