import React from 'react';
import { shallow } from 'enzyme';
import { mockSignUpState } from '../../Utils/mockData';
import { setNewVenue } from '../../actions/venueActions';

import { SignUp } from './SignUp';

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

  it.skip('saveVenue, should save the current venue', async () => {
    await wrapper.setState({ mockSignUpState });
    await wrapper.instance().saveVenue();
    await expect(setNewVenue).toHaveBeenCalled();
  });
});
