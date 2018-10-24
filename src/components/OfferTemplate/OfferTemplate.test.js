import React from 'react';
import { shallow } from 'enzyme';

import OfferTemplate from './OfferTemplate';

describe('OfferTemplate component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OfferTemplate />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
