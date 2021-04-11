import AboutMe from './Sections/AboutMe';
import LetestProjects from './Sections/LetestProjects';
import Contact from './Sections/Contact';
import Skills from './Sections/Skills';

import { HomePageStyles } from './styles';

const HomePage = () => {
  return (
    <HomePageStyles>
      <AboutMe className="about-me" />
      <Contact className="contact" />
      <LetestProjects className="letest-projects" />
      <Skills className="skills" />
    </HomePageStyles>
  );
};

export default HomePage;
