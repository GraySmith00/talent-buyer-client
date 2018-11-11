import React from 'react';
import { shallow } from 'enzyme';
import { mockOffers } from '../../Utils/mockData';
import { OffersContainer } from './OffersContainer';

describe('OffersContainer component', () => {
  let wrapper;
  let mockDate;
  let mockOpenEditOfferModal;
  let mockOpenViewOfferModal;

  beforeEach(() => {
    mockDate = new Date(2019, 11, 10);
    mockOpenEditOfferModal = jest.fn();
    mockOpenViewOfferModal = jest.fn();

    wrapper = shallow(
      <OffersContainer
        date={mockDate}
        offers={mockOffers}
        openEditOfferModal={mockOpenEditOfferModal}
        openViewOfferModal={mockOpenViewOfferModal}
      />
    );
  });

  it('should have an offers container', () => {
    expect(wrapper.find('.offers-container').length).toEqual(1);
  });
});
