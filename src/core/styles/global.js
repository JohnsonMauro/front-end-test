import React from 'react';
import { css, Global } from '@emotion/react';
import theme from './theme';

const styles = css`
  * {
    box-sizing: border-box;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body,
  html {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: ${theme.colors.pattensBlue};
    display: flex;
    flex-direction: column;
  }

  a,
  button,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  label,
  section,
  select,
  span {
    font-family: ${theme.fonts.Montserrat};
  }

  p {
    font-family: ${theme.fonts.Arial};
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const globalStyles = <Global styles={styles} />;
