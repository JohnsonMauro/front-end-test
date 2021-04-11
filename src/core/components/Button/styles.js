import styled from '@emotion/styled';
import { css } from '@emotion/react';

const variants = ({ variant, theme }) =>
  ({
    success: css`
      background-color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      color: ${theme.colors.white};
    `,
    info: css`
      background-color: ${theme.colors.info};
      border: 1px solid ${theme.colors.info};
      color: ${theme.colors.white};
    `,
  }[variant]);

const ButtonStyles = styled.button`
  ${variants};
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  height: 35px;
  outline: none;
  padding: 0 22px;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
`;

export { ButtonStyles };
