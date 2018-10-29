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

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
