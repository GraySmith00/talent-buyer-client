import React from 'react';
import { shallow } from 'enzyme';

import NavLink from './NavLink';

describe('NavLink', () => {
  let wrapper;

  beforeEach(() => {
    const mockDisplayText = "mock";
    const displayText = mockDisplayText;
    const mockRouteLink = "/mock";
    const routeLink = mockRouteLink;

    wrapper = shallow(<NavLink displayText={displayText} routeLink={routeLink} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});