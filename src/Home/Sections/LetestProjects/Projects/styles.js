import styled from '@emotion/styled';

const ProjectStyles = styled.div`
  margin-bottom: 28px;
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

const ProjectHighlightedTitle = styled.h2`
  color: ${({ theme }) => theme.colors.trout};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 20px;
  font-weight: bold;
  margin: 16px 0 0;
  text-align: center;
`;

const ProjectOtherTitle = styled.h3`
  color: ${({ theme }) => theme.colors.trout};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0 0;
`;

const ProjectPlot = styled.p`
  color: ${({ theme }) => theme.colors.trout};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 14px;
  margin: 10px 0 16px;
  text-align: center;
`;

export { ProjectStyles, ProjectHeader, ProjectHighlightedTitle, ProjectOtherTitle, ProjectPlot };
