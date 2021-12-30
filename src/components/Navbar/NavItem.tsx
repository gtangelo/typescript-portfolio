import { Typography } from '@material-ui/core';
import { Link } from 'react-scroll';
import React from 'react';
import styled from 'styled-components';

interface NavItemProps {
  name: string;
  href: string;
}

const NavItemWrapper = styled.li`
  list-style: none;
`;

const NavItem = ({ name, href }: NavItemProps) => {
  return (
    <NavItemWrapper>
      <Link to={href} spy smooth duration={1200}>
        <Typography variant="h6">{name}</Typography>
      </Link>
    </NavItemWrapper>
  );
};

export default NavItem;
