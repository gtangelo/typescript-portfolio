import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const navItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const NavItemWrapper = styled.li`
  width: 100%;
  padding: 20px 30px;
`;

interface HamburgerMenuNavItemProps {
  name: string;
  href: string;
}

const HamburgerMenuNavItem = ({ name, href }: HamburgerMenuNavItemProps) => {
  return (
    <NavItemWrapper as={motion.li} variants={navItemVariants}>
      <Link to={href}>
        <Typography variant="h5">{name}</Typography>
      </Link>
    </NavItemWrapper>
  );
};

export default HamburgerMenuNavItem;
