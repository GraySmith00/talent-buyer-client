import React from 'react';
import { shallow } from 'enzyme';

import OfferModal from './OfferModal';

describe('OfferModal component', () => {
  let wrapper;
  let mockCloseOfferModal;

  beforeEach(() => {
    mockCloseOfferModal = jest.fn();
    wrapper = shallow(<OfferModal closeOfferModal={mockCloseOfferModal} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
