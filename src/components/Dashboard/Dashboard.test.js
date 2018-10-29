import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('should match the snapshot', () => {
    expect(wrapper.find('.calendar').length).toEqual(1);
  });
});
