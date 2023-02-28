import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'gatsby';
import Category from 'types/Category';

const CardWrapper = styled.div`
  width: 100%;
`;

const CardImg = styled.img`
  width: 100%;
  padding: 20px;
  border-radius: 30px;
`;

const CardContent = styled.div<{ position: number }>`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.position % 2 ? 'flex-end' : 'flex-start')};
  text-align: ${(props) => (props.position % 2 ? 'right' : 'left')};

  @media screen and (max-width: 600px) {
    align-items: center;
    text-align: center;
  }

  & > * {
    padding-bottom: 10px;
  }
`;

const CardCatergories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  justify-content: center;

  & > * {
    margin: 5px;
  }
`;

const CardExternalLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 -10px;

  & > * {
    margin: 0 10px;
  }
`;

const CategoryWrapper = styled.div<{ colour: string }>`
  background-color: ${(props) => props.colour};
  padding: 3px 20px;
  border-radius: 15px;
  color: #333;
`;

interface ProjectCardProps {
  title: string;
  description: string;
  categories: Category[];
  github?: string;
  deploy?: string;
  img: string;
  position: number;
}

const ProjectCard = ({
  title,
  description,
  github,
  deploy,
  img,
  categories,
  position,
}: ProjectCardProps) => {
  return (
    <CardWrapper>
      <Grid container direction={position % 2 ? 'row-reverse' : 'row'}>
        <Grid item md={7} sm={7} xs={12}>
          <CardImg src={img} alt={title} />
        </Grid>
        <Grid item md={5} sm={5} xs={12}>
          <CardContent position={position}>
            <Typography variant="h5">{title}</Typography>
            <CardCatergories>
              {categories.map((category) => (
                <CategoryWrapper colour={category.colour} key={category.title}>
                  <Typography variant="subtitle2">{category.title}</Typography>
                </CategoryWrapper>
              ))}
            </CardCatergories>
            <Typography variant="body1" align="inherit">
              {description}
            </Typography>
            <CardExternalLinks>
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  <FaGithub size="1.8rem" />
                </a>
              )}
              {deploy && (
                <a href={deploy} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt size="1.8rem" />
                </a>
              )}
            </CardExternalLinks>
          </CardContent>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default ProjectCard;
