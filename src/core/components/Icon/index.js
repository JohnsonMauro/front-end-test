import { IconStyles } from './styles';

const Icon = ({ children, color, size }) => (
  <IconStyles color={color} size={size}>
    {children}
  </IconStyles>
);

export default Icon;
