import React from 'react';
import { shallow } from 'enzyme';

import SignUp from './SignUp';

describe('SignUp component', () => {
  let wrapper;
  let mockCloseSignUpModal;

  beforeEach(() => {
    mockCloseSignUpModal = jest.fn();
    wrapper = shallow(<SignUp closeSignUpModal={mockCloseSignUpModal} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
