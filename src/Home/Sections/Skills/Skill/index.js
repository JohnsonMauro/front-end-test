import {
  SkillStyles,
  SkillInfoContainer,
  SkillName,
  SkillLevel,
  SkillProgressBarContainer,
  SkillProgressBar,
} from './styles';

const Skill = ({ name, level }) => {
  return (
    <SkillStyles>
      <SkillInfoContainer>
        <SkillName>{name}</SkillName>
        <SkillLevel>{level}</SkillLevel>
      </SkillInfoContainer>
      <SkillProgressBarContainer>
        <SkillProgressBar level={level} />
      </SkillProgressBarContainer>
    </SkillStyles>
  );
};

export default Skill;
