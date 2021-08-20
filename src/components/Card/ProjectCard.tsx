import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  background-color: #c25e5e;
`;

const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  mix-blend-mode: darken;
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardBody = styled.div`
  padding: 20px 0;
`;

const CardCatergories = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface CardInfo {
  title: string;
  description: string;
  categories: string[];
  github?: string;
  deploy?: string;
  img: string;
}

const ProjectCard: React.FC<CardInfo> = ({ title, description, github, deploy, img }) => {
  return (
    <CardWrapper>
      <CardImg src={img} />
      <CardContent>
        <Typography component="p" variant="subtitle1">
          Project
        </Typography>
        <Typography component="h6" variant="h6">
          {title}
        </Typography>
        <CardBody>
          <Typography component="p" variant="body1">
            {description}
          </Typography>
        </CardBody>
        <CardCatergories>
          <Typography component="p" variant="body1">
            React
          </Typography>
          <Typography component="p" variant="body1">
            Python
          </Typography>
        </CardCatergories>
        <a href={github}>Github</a>
        <a href={deploy}>Deploy</a>
      </CardContent>
    </CardWrapper>
  );
};

export default ProjectCard;
