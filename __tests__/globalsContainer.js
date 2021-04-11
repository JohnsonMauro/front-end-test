/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { globalStyles } from '@styles/global';
import theme from '@styles/theme';

const GlobalsContainer = ({ children }) => (
  <ThemeProvider theme={theme}>
    {globalStyles}
    {children}
  </ThemeProvider>
);

export default GlobalsContainer;
