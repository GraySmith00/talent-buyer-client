import React from 'react';
import { shallow } from 'enzyme';

import { Watchlist } from './Watchlist';
import { mockWatchlist } from '../../Utils/mockData';

describe('Watchlist component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Watchlist watchlist={mockWatchlist} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
