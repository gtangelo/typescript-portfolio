import styled from 'styled-components';
import React from 'react';

interface TitleHeaderProps {
  title: string;
}

const Header = styled.h2`
  display: flex;
  align-items: center;
  max-width: 750px;
  width: 100%;
  font-size: 1.6rem;
  white-space: nowrap;
  margin: 10px 0px 30px;
  padding-right: 30px;
  text-transform: uppercase;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-left: 15px;
    background-color: #9c9c9c;
  }
`;

const TitleHeader = ({ title }: TitleHeaderProps) => {
  return <Header>{title}</Header>;
};

export default TitleHeader;
