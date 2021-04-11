import styled from '@emotion/styled';

const HeaderStyles = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: auto;
  margin: auto 0;
  padding: 25px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const HeaderInfoContainer = styled.div`
  display: flex;
  width: 60%;

  @media (max-width: 750px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const HeaderImage = styled.img`
  height: 150px;
  width: 150px;
`;

const HeaderInfoContent = styled.div`
  margin-left: 30px;

  @media (max-width: 750px) {
    margin-left: 0;
  }
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
  width: 100%;
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

const HeaderContactMeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;

  @media (max-width: 750px) {
    justify-content: center;
    width: 100%;
  }
`;

export {
  HeaderStyles,
  HeaderImage,
  HeaderInfoContent,
  HeaderInfoContainer,
  HeaderMainTitle,
  HeaderMainSubTitle,
  HeaderIconContainer,
  HeaderIconContent,
  HeaderContactMeContainer,
};
