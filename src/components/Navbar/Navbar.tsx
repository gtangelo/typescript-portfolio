import { Link } from 'gatsby';
import Button from 'components/Button';
import ROUTES from 'data/routes';
import React from 'react';
import styled from 'styled-components';
import { Container, useTheme, useMediaQuery } from '@mui/material';
import HamburgerMenu from 'components/HamburgerMenu';
import NavItem from './NavItem';

const NavbarWrapper = styled.header`
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
  display: flex;
  align-items: center;
  height: var(--navbar-height);
  justify-content: flex-end;

  & > * {
    margin-left: 25px;
  }
`;

const Navbar = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <NavbarWrapper>
      <Container>
        <NavbarHeader>
          <Link to="/">
            <img src="/favicon.ico" alt="logo" width="40px" />
          </Link>
          <NavItemsList>
            {desktop ? (
              <>
                {ROUTES.map((route) => (
                  <NavItem name={route.name} href={route.href} key={route.name} />
                ))}
                <a download href="/resume.pdf">
                  <Button>Resume</Button>
                </a>
              </>
            ) : (
              <HamburgerMenu />
            )}
          </NavItemsList>
        </NavbarHeader>
      </Container>
    </NavbarWrapper>
  );
};
export default Navbar;
