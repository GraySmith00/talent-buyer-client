import React from 'react';
import { shallow } from 'enzyme';
import { mockHistory } from '../../Utils/mockData';
import { setNewVenue } from '../../actions/venueActions';
import { registerUser } from '../../actions/userActions';

import { SignUp } from './SignUp';

jest.mock('../../actions/venueActions');
jest.mock('../../actions/userActions');


describe('SignUp component', () => {
  let wrapper;
  let mockCloseSignUpModal;
  let mockRegisterUser;

  beforeEach(() => {
    mockCloseSignUpModal = jest.fn();
    mockRegisterUser = jest.fn();

    wrapper = shallow(
      <SignUp
        closeSignUpModal={mockCloseSignUpModal}
        history={mockHistory}
        registerUser={mockRegisterUser}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state', () => {
    const expected = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      venueName: '',
      venueCity: '',
      venueError: '',
      userError: ''
    };

    expect(wrapper.state()).toEqual(expected);
  });

  describe('handleChange', () => {
    it.skip('should change state when an input is changed', () => {
      wrapper.find('input').simulate('change', { target: { value: 'Bob' } });
    });
  });

  describe('saveVenue', () => {
    it.skip('should call setNewVenue', () => {
      wrapper.instance().saveVenue();
      expect(setNewVenue).toHaveBeenCalled();
    });
  });

  describe('saveUser', () => {
    it.skip('should call registerUser', () => {
      wrapper.instance().saveUser();
      expect(registerUser).toHaveBeenCalled();
    });
  });
});
