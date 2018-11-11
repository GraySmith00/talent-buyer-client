import React from 'react';
import { shallow } from 'enzyme';
import { mockOffers, mockUser, mockVenue } from '../../Utils/mockData';
import { ViewOfferModal } from './ViewOfferModal';

describe('ViewOfferModal component', () => {
  let wrapper;
  let mockCloseViewOfferModal;

  beforeEach(() => {
    mockCloseViewOfferModal = jest.fn();
    wrapper = shallow(
      <ViewOfferModal
        offers={mockOffers}
        currentUser={mockUser}
        currentVenue={mockVenue}
        offerId={mockOffers[0].id}
        closeViewOfferModal={mockCloseViewOfferModal}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
