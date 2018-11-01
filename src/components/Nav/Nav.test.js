import React from 'react';
import { shallow } from 'enzyme';
import { mockVenue } from '../../Utils/mockData';
import { Nav } from './Nav';

describe('Nav component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav currentVenue={mockVenue} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
