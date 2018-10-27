import React from 'react';
import { shallow } from 'enzyme';

import { LogIn } from './LogIn';

describe('LogIn component', () => {
  let wrapper;
  let mockCloseLoginModal;
  let mockLogInUser;

  beforeEach(() => {
    mockLogInUser = jest.fn();
    mockCloseLoginModal = jest.fn();
    wrapper = shallow(
      <LogIn closeLogInModal={mockCloseLoginModal} logInUser={mockLogInUser} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
