import styled from '@emotion/styled';

const SectionStyles = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  padding: 35px 25px;
  width: 100%;
`;

const SectionTitleHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.trout};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const SectionArticle = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export { SectionStyles, SectionTitleHeader, SectionTitle, SectionArticle };
