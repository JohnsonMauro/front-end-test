import styled from '@emotion/styled';
import { css } from '@emotion/react';

const SkillStyles = styled.div`
  margin: 13px;
  width: 100%;
`;

const SkillInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.colors.trout};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 15px;
  font-weight: bold;
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.colors.lightGrayishBlue};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 13px;
  font-weight: bold;
  text-align: right;
`;

const SkillProgressBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  height: 15px;
  margin-top: 6px;
  width: 100%;
`;

const variants = ({ level }) =>
  ({
    Expert: css`
      width: 95%;
    `,
    Pro: css`
      width: 85%;
    `,
  }[level]);

const SkillProgressBar = styled.div`
  ${variants};
  background-color: ${({ theme }) => theme.colors.limeGreen};
  height: 15px;
`;

export {
  SkillStyles,
  SkillInfoContainer,
  SkillName,
  SkillLevel,
  SkillProgressBarContainer,
  SkillProgressBar,
};
