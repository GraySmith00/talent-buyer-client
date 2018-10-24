import React from 'react';
import { shallow } from 'enzyme';

import Landing from './Landing';

describe('Landing component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
