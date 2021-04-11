import styled from '@emotion/styled';

const IconStyles = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size || 16}px;

  i {
    transform: scaleX(-1);
  }
`;

export { IconStyles };
