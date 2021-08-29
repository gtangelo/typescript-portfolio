import ROUTES from 'data/routes';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme, useMediaQuery, Box } from '@material-ui/core';
import Button from 'components/Button';
import HamburgerMenuNavItem from './HamburgerMenuNavItem';
import HamburgerMenuToggle from './HamburgerMenuToggle';

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2, staggerDirection: -1 },
  },
};

const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  /* background: rgba(173, 173, 173, 0.8); */
  backdrop-filter: blur(5px);
  padding-top: var(--navbar-height);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HamburgerItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const HamburgerMenu = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);

  return (
    <div>
      <HamburgerMenuToggle open={open} setOpen={setOpen} />
      <AnimatePresence>
        {!desktop && open && (
          <Backdrop
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <HamburgerItemsList
              as={motion.ul}
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {ROUTES.map((route) => (
                <HamburgerMenuNavItem key={route.name} name={route.name} href={route.href} />
              ))}
              <Box px={3} component={motion.li}>
                <a download href="/resume.pdf">
                  <Button>Resume</Button>
                </a>
              </Box>
            </HamburgerItemsList>
          </Backdrop>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
