import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Paragraph from './index';

describe('<Paragraph />', () => {
  it('Renders the Paragraph component', () => {
    const { container } = render(<Paragraph>Sample</Paragraph>, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
