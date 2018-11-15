import React from 'react';
import { shallow } from 'enzyme';

import { Splash } from './Splash';

describe('Splash component', () => {
  let wrapper;
  let mockOpenSignUpModal;
  let mockOpenLogInModal;

  beforeEach(() => {
    mockOpenSignUpModal = jest.fn();
    mockOpenLogInModal = jest.fn();

    wrapper = shallow(
      <Splash
        openSignUpModal={mockOpenSignUpModal}
        openLogInModal={mockOpenLogInModal}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
