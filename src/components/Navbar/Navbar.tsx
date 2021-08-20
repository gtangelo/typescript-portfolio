import { Link } from 'gatsby';
import Button from 'components/Button';
import { ROUTES } from 'data/routes';
import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import { Container } from '@material-ui/core';

const NavbarWrapper = styled.header`
  --navbar-height: 70px;
  height: var(--navbar-height);
  width: 100%;
  background-color: #0f1624;
  color: #fff;
`;

const NavbarHeader = styled.nav`
  height: var(--navbar-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavItemsList = styled.ul`
  all: unset;
  width: 600px;
  display: flex;
  align-items: center;
  height: var(--navbar-height);
  justify-content: flex-end;

  & > * {
    margin-left: 25px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Container>
        <NavbarHeader>
          <img
            src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl_400x400.jpg"
            width="50px"
          />
          <NavItemsList>
            {ROUTES.map((route) => (
              <NavItem name={route.name} href={route.href} />
            ))}
            <Button onClick={() => console.log('download resume')}>Resume</Button>
          </NavItemsList>
        </NavbarHeader>
      </Container>
    </NavbarWrapper>
  );
};
export default Navbar;
