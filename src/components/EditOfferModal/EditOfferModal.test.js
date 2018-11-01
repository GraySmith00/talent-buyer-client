import React from 'react';
import { shallow } from 'enzyme';
import { mockOffers } from '../../Utils/mockData';
import { EditOfferModal } from './EditOfferModal';

describe('EditOfferModal component', () => {
  let wrapper;
  let mockCloseEditOfferModal;
  let mockOfferId;

  beforeEach(() => {
    mockCloseEditOfferModal = jest.fn();
    mockOfferId = 5;

    wrapper = shallow(
      <EditOfferModal
        closeEditOfferModal={mockCloseEditOfferModal}
        offerId={mockOfferId}
        offers={mockOffers}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
