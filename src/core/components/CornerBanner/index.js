import { CornerBannerStyles, CornerBannerText } from './styles';

const CornerBanner = ({ children }) => (
  <CornerBannerStyles>
    <CornerBannerText>{children}</CornerBannerText>
  </CornerBannerStyles>
);

export default CornerBanner;
