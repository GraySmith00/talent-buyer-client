import React from 'react';
import { shallow } from 'enzyme';

import ArtistIndex from './ArtistIndex';

jest.mock('../../Utils/backendApiCalls');

describe('ArtistIndex component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistIndex />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
