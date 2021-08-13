import { Link } from '@reach/router';
import Button from 'components/Button';
import { ROUTES } from 'data/routes';
import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.header`
  ul,
  ul li,
  ul a {
    all: unset;
  }

  height: 80px;
  width: 100vw;
  background-color: #0f1624;
  color: #fff;

  a:hover {
    cursor: pointer;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <nav>
        <ul>
          {ROUTES.map((route) => (
            <li>
              <Link to={route.href}>
                <Button>{route.name}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </NavbarWrapper>
  );
};
export default Navbar;
