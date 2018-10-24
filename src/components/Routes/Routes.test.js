import React from 'react';
import { shallow } from 'enzyme';

import Routes from './Routes';

describe('Routes component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
