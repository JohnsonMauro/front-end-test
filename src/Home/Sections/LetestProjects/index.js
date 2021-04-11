import Button from '@core/components/Button';
import Link from '@core/components/Link';
import Section from '@core/components/Section';
import Paragraph from '@core/components/Paragraph';
import CornerBanner from '@core/components/CornerBanner';
import Divider from '@core/components/Divider';

import Projects from './Projects/';
import { ImageContainer, ProjectImages } from './styles';

import { projectsData } from './mock';

const LetestProjects = () => {
  return (
    <Section title="Latest Projects">
      <Projects
        highlightedTitle="KickStarter - Potato Salad App"
        plot="A mobile app to help you make delicious potato salad"
      >
        <ImageContainer>
          <CornerBanner>App</CornerBanner>
        </ImageContainer>
        <Paragraph>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as necessary, making this the
          first true generator on the Internet.
        </Paragraph>
        <Paragraph>
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or non-characteristic words etc.
        </Paragraph>
      </Projects>

      <Button variant="info">
        <i className="far fa-thumbs-up"></i> Back my project
      </Button>

      <Divider />

      {Boolean(projectsData) &&
        projectsData.map(({ id, image: { src, alt }, title, description, externalLink }) => (
          <div key={id}>
            <ProjectImages src={src} alt={alt} />
            <Projects otherTitle={title}>
              <Paragraph>{description}</Paragraph>
              <Link>
                <i className="fas fa-external-link-alt"></i> Find out more
              </Link>
            </Projects>
          </div>
        ))}
    </Section>
  );
};

export default LetestProjects;
