import React from 'react';
import { shallow } from 'enzyme';

import LogIn from './LogIn';

describe('LogIn component', () => {
  let wrapper;
  let mockCloseLoginModal;

  beforeEach(() => {
    mockCloseLoginModal = jest.fn();
    wrapper = shallow(<LogIn closeLogInModal={mockCloseLoginModal} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
