import React from 'react';
import { shallow } from 'enzyme';

import { OfferModal } from './OfferModal';

describe('OfferModal component', () => {
  let wrapper;
  let mockCloseOfferModal;
  let mockDate;

  beforeEach(() => {
    mockCloseOfferModal = jest.fn();
    mockDate = new Date(2019, 11, 10);

    wrapper = shallow(
      <OfferModal closeOfferModal={mockCloseOfferModal} date={mockDate} />
    );
  });

  it('should render an offer form', () => {
    expect(wrapper.find('.offer-form').length).toEqual(1);
  });
});
