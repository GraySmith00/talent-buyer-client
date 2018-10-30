import React from 'react';
import { shallow } from 'enzyme';

import { ArtistIndex } from './ArtistIndex';
import { mockWatchlist } from '../../Utils/mockData';

jest.mock('../../Utils/backendApiCalls');

describe('ArtistIndex component', () => {
  let wrapper;

  beforeEach(() => {
    const mockFunction = jest.fn();
    let getArtist = mockFunction;
    wrapper = shallow(
      <ArtistIndex getArtist={getArtist} watchlist={mockWatchlist} />
    );
  });

  it('should match the snapshot', () => {
    expect(true).toEqual(true);
    expect(wrapper.find('.agency-form').length).toEqual(1);
  });
});
