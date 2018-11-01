import React from 'react';
import { shallow } from 'enzyme';
import { mockOffers } from '../../Utils/mockData';
import { RecentOffers } from './RecentOffers';

describe('RecentOffers component', () => {
  let wrapper;
  let mockOpenEditOfferModal;

  beforeEach(() => {
    mockOpenEditOfferModal = jest.fn();

    wrapper = shallow(
      <RecentOffers
        offers={mockOffers}
        openEditOfferModal={mockOpenEditOfferModal}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
