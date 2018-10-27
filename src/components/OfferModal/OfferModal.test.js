import React from 'react';
import { shallow } from 'enzyme';

import OfferModal from './OfferModal';

describe('OfferModal component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OfferModal />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
