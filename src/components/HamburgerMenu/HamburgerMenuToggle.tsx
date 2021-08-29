import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import styled from 'styled-components';

interface PathProps {
  d?: string;
}

const Path = (props: MotionProps & PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--black)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = styled.button`
  width: 50px;
  height: 50px;
  :hover {
    cursor: pointer;
  }
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 100;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface HamburgerMenuToggleProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenuToggle = ({ open, setOpen }: HamburgerMenuToggleProps) => {
  return (
    <MenuButton onClick={() => setOpen((prevState) => !prevState)}>
      <svg width="23" height="23" viewBox="0 0 20 20">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          animate={open ? 'open' : 'closed'}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          animate={open ? 'open' : 'closed'}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          animate={open ? 'open' : 'closed'}
        />
      </svg>
    </MenuButton>
  );
};

export default HamburgerMenuToggle;
