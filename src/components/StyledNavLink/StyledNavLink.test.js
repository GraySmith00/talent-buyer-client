import React from 'react';
import { shallow } from 'enzyme';

import StyledNavLink from './StyledNavLink';

describe('StyledNavLink', () => {
  let wrapper;

  beforeEach(() => {
    const mockDisplayText = 'mock';
    const displayText = mockDisplayText;
    const mockRouteLink = '/mock';
    const routeLink = mockRouteLink;

    wrapper = shallow(
      <StyledNavLink displayText={displayText} routeLink={routeLink} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
