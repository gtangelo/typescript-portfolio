import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'gatsby';

const CardWrapper = styled.div`
  width: 100%;
`;

const CardImg = styled.img`
  width: 100%;
  padding: 20px;
  border-radius: 30px;
`;

const CardContent = styled.div`
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

const Category = styled.div`
  background-color: ${(props) => props.color};
  padding: 3px 20px;
  border-radius: 15px;
  color: #333;
`;

interface CardInfo {
  title: string;
  description: string;
  categories: string[];
  github?: string;
  deploy?: string;
  img: string;
  link: string;
  position: number;
}

const ProjectCard: React.FC<CardInfo> = ({
  title,
  description,
  github,
  deploy,
  img,
  categories,
  position,
  link,
}) => {
  return (
    <CardWrapper>
      <Grid container direction={position % 2 ? 'row-reverse' : 'row'}>
        <Grid item md={7} sm={7} xs={12}>
          <Link to={link && link}>
            <CardImg src={img} alt={title} />
          </Link>
        </Grid>
        <Grid item md={5} sm={5} xs={12}>
          <CardContent position={position}>
            <Typography variant="h5">{title}</Typography>
            <CardCatergories>
              {categories.map((category) => (
                <Category color={category.colour}>
                  <Typography variant="subtitle2">{category.title}</Typography>
                </Category>
              ))}
            </CardCatergories>
            <Typography variant="body1" align="inherit">
              {description}
            </Typography>
            <CardExternalLinks>
              {github && (
                <a href={github} target="_blank">
                  <FaGithub size="1.8rem" />
                </a>
              )}
              {deploy && (
                <a href={deploy} target="_blank">
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