import React from 'react';
import { shallow } from 'enzyme';

import ArtistShow from './ArtistShow';

describe('ArtistShow component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistShow />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
