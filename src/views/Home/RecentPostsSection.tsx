import React from 'react';
import { Box, Container } from '@material-ui/core';
import Button from 'components/Button';
import { BlogCard } from 'components/Card/';
import TitleHeader from 'components/TitleHeader';
import styled from 'styled-components';

const BlogPostsWrapper = styled.div`
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

const RecentPostsSection: React.FC = () => {
  return (
    <Container>
      <TitleHeader title="Recent Blog Posts" />
      <BlogPostsWrapper>
        {new Array(3).fill(0).map(() => (
          <BlogCard key="test" />
        ))}
      </BlogPostsWrapper>
      <Box pb={7} pt={3} display="flex" justifyContent="center">
        <Button>Show More</Button>
      </Box>
    </Container>
  );
};

export default RecentPostsSection;
