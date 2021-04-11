import Profile from '@images/profile.png';
import Button from '@core/components/Button';
import {
  HeaderStyles,
  HeaderImg,
  HeaderMainTitle,
  HeaderMainSubTitle,
  HeaderIconContainer,
  HeaderIconContent,
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
    <HeaderImg src={Profile} alt="A image of a man in a round style"></HeaderImg>
    <HeaderMainTitle>James Lee</HeaderMainTitle>
    <HeaderMainSubTitle>Web App Developer</HeaderMainSubTitle>
    <HeaderIconContainer>
      {socialMediasIcons.map(({ id, icon }) => (
        <HeaderIconContent key={id}>
          <i className={`fab ${icon}`}></i>
        </HeaderIconContent>
      ))}
    </HeaderIconContainer>
    <Button variant="success">
      <i className="fas fa-paper-plane"></i> Contact Me
    </Button>
  </HeaderStyles>
);

export default Header;
