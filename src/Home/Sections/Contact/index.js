import Link from '@core/components/Link';
import Icon from '@core/components/Icon';

import {
  ContactStyles,
  ContactContent,
  ContactContentIcon,
  ContactContentInfo,
  ContactInfoText,
} from './styles';

const Contact = () => {
  return (
    <ContactStyles>
      <ContactContent>
        <ContactContentIcon>
          <Icon color="#b0b7bf" size="14">
            <i className="fas fa-map-marker-alt"></i>
          </Icon>
        </ContactContentIcon>
        <ContactContentInfo>
          <ContactInfoText>San Francisco, US</ContactInfoText>
        </ContactContentInfo>
      </ContactContent>

      <ContactContent>
        <ContactContentIcon>
          <Icon color="#b0b7bf" size="14">
            <i className="far fa-envelope"></i>
          </Icon>
        </ContactContentIcon>
        <ContactContentInfo>
          <Link>jameslee@website.com</Link>
        </ContactContentInfo>
      </ContactContent>

      <ContactContent>
        <ContactContentIcon>
          <Icon color="#b0b7bf" size="14">
            <i className="fas fa-link"></i>
          </Icon>
        </ContactContentIcon>
        <ContactContentInfo>
          <Link>https://www.website.com</Link>
        </ContactContentInfo>
      </ContactContent>
    </ContactStyles>
  );
};

export default Contact;
