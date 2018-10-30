import React from 'react';
import { shallow } from 'enzyme';

import ArtistIndex from './ArtistIndex';

jest.mock('../../Utils/backendApiCalls');

describe('ArtistIndex component', () => {
  let wrapper;

  beforeEach(() => {
    const mockFunction = jest.fn();
    const getArtist = mockFunction;
    wrapper = shallow(<ArtistIndex getArtist={getArtist} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
