import Section from '@core/components/Section';
import Paragraph from '@core/components/Paragraph';
import Link from '@core/components/Link';

import Skill from './Skill';

import { LinkContainer } from './styles';

const Skills = () => {
  return (
    <Section title="Skills">
      <Paragraph>
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look
        even slightly believable.
      </Paragraph>
      <Skill name="Python & Django" level="Expert" />
      <Skill name="Javascript & jQuery" level="Expert" />
      <Skill name="HTML5, CSS3, SASS & LESS" level="Expert" />
      <Skill name="Ruby on Rails" level="Pro" />
      <LinkContainer>
        <Link>
          <i className="fas fa-external-link-alt"></i> More on Coderwall
        </Link>
      </LinkContainer>
    </Section>
  );
};

export default Skills;
