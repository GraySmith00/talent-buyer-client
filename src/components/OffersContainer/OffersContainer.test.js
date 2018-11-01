import React from 'react';
import { shallow } from 'enzyme';
import { mockOffers } from '../../Utils/mockData';
import { OffersContainer } from './OffersContainer';

describe('OffersContainer component', () => {
  let wrapper;
  let mockDate;
  let mockOpenEditOfferModal;

  beforeEach(() => {
    mockDate = new Date(2019, 11, 10);
    mockOpenEditOfferModal = jest.fn();

    wrapper = shallow(
      <OffersContainer
        date={mockDate}
        offers={mockOffers}
        openEditOfferModal={mockOpenEditOfferModal}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
