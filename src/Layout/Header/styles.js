import styled from '@emotion/styled';

const HeaderStyles = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  height: auto;
  margin: auto 0;
  padding: 25px 0;
`;

const HeaderImg = styled.img`
  height: 150px;
  width: 150px;
`;

const HeaderMainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.trout};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 38px;
  font-weight: bold;
  margin: 0;
`;

const HeaderMainSubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.bombay};
  font-family: ${({ theme }) => theme.fonts.Arial};
  font-size: 24px;
  font-weight: normal;
  margin: 0;
`;

const HeaderIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0 40px;
  width: 72%;
`;

const HeaderIconContent = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bombay};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 30px;
  justify-content: center;
  text-align: center;
  width: 30px;
`;

export {
  HeaderStyles,
  HeaderImg,
  HeaderMainTitle,
  HeaderMainSubTitle,
  HeaderIconContainer,
  HeaderIconContent,
};
