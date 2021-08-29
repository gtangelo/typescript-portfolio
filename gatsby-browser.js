import './src/assets/styles/global.css';
import './src/assets/styles/fonts.css';
import './src/assets/styles/preloader.css';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
