import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Typography } from '@mui/material';
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
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenuNavItem = ({ name, href, setOpen }: HamburgerMenuNavItemProps) => {
  return (
    <NavItemWrapper as={motion.li} variants={navItemVariants}>
      <Link to={href} spy smooth duration={1200} onClick={() => setOpen((prevState) => !prevState)}>
        <Typography variant="h5">{name}</Typography>
      </Link>
    </NavItemWrapper>
  );
};

export default HamburgerMenuNavItem;
