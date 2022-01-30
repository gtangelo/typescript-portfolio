import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background-color: #00315f;
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

const BlogCard = ({
  title, description, href, categories,
}: BlogCardProps) => {
  return (
    <CardWrapper>
      <Typography variant="h5">Title</Typography>
      <CardBody>
        <Typography variant="subtitle1">hi there</Typography>
      </CardBody>
    </CardWrapper>
  );
};

export default BlogCard;
