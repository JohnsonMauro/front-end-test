import styled from '@emotion/styled';

const CornerBannerStyles = styled.div`
  width: 102px;
  height: 94px;
  overflow: hidden;
  position: relative;
  top: -6px;
  right: -181px;
`;

const CornerBannerText = styled.span`
  position: absolute;
  display: block;
  width: 189px;
  padding: 11px 0;
  background-color: ${({ theme }) => theme.colors.info};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 13px;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  left: -23px;
  top: 20px;
  transform: rotate(45deg);
`;

export { CornerBannerStyles, CornerBannerText };
