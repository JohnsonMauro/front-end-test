import Profile from '@images/profile.png';
import Button from '@core/components/Button';

import {
  HeaderStyles,
  HeaderImage,
  HeaderInfoContent,
  HeaderInfoContainer,
  HeaderMainTitle,
  HeaderMainSubTitle,
  HeaderIconContainer,
  HeaderIconContent,
  HeaderContactMeContainer,
} from './styles';

const socialMediasIcons = [
  { id: 1, icon: 'fa-twitter' },
  { id: 2, icon: 'fa-google-plus-g' },
  { id: 3, icon: 'fa-linkedin-in' },
  { id: 4, icon: 'fa-github-alt' },
  { id: 5, icon: 'fa-yammer' },
];

const Header = () => (
  <HeaderStyles>
    <HeaderInfoContainer>
      <HeaderImage src={Profile} alt="A image of a man in a round style" />
      <HeaderInfoContent>
        <HeaderMainTitle>James Lee</HeaderMainTitle>
        <HeaderMainSubTitle>Web App Developer</HeaderMainSubTitle>
        <HeaderIconContainer>
          {socialMediasIcons.map(({ id, icon }) => (
            <HeaderIconContent key={id}>
              <i className={`fab ${icon}`}></i>
            </HeaderIconContent>
          ))}
        </HeaderIconContainer>
      </HeaderInfoContent>
    </HeaderInfoContainer>
    <HeaderContactMeContainer>
      <Button variant="success">
        <i className="fas fa-paper-plane"></i> Contact Me
      </Button>
    </HeaderContactMeContainer>
  </HeaderStyles>
);

export default Header;
