import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface NavItemProps {
  name: string;
  href: string;
}

const NavItemWrapper = styled.li`
  all: unset;

  a {
    all: unset;
  }

  a:hover {
    cursor: pointer;
  }
`;

const NavItem: React.FC<NavItemProps> = ({ name, href }) => {
  return (
    <NavItemWrapper>
      <Link to={href}>
        <Typography variant="h6" component="h6">
          {name}
        </Typography>
      </Link>
    </NavItemWrapper>
  );
};

export default NavItem;
