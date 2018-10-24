import React from 'react';
import { shallow } from 'enzyme';

import OfferForm from './OfferForm';

describe('OfferForm component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OfferForm />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
