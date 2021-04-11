import styled from '@emotion/styled';

const FooterStyles = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 50px;
  justify-content: center;
`;

const IconContainer = styled.span`
  color: red;
  font-size: 28px;
`;

export { FooterStyles, IconContainer };
