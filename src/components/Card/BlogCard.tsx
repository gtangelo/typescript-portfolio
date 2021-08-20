import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background-color: #333;
  padding: 25px 20px;
`;

const CardBody = styled.div`
  min-height: 200px;
`;

interface BlogCardProps {
  title: string;
  description: string;
  href: string;
  categories: string[];
}

const BlogCard: React.FC<BlogCardProps> = () => {
  return (
    <CardWrapper>
      <Typography component="h5" variant="h5">
        Title
      </Typography>
      <CardBody>
        <Typography component="p" variant="subtitle1">
          hit there
        </Typography>
      </CardBody>
    </CardWrapper>
  );
};

export default BlogCard;
