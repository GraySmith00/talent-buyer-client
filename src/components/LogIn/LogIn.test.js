import React from 'react';
import { shallow } from 'enzyme';
import { mockHistory } from '../../Utils/mockData';
import { LogIn } from './LogIn';

describe('LogIn component', () => {
  let wrapper;
  let mockCloseLoginModal;
  let mockLogInUser;
  let mockSetUserVenue;
  let mockPopulateUserOffers;
  let mockPopulateUserWatchlist;

  beforeEach(() => {
    mockLogInUser = jest.fn();
    mockCloseLoginModal = jest.fn();
    mockSetUserVenue = jest.fn();
    mockPopulateUserOffers = jest.fn();
    mockPopulateUserWatchlist = jest.fn();

    wrapper = shallow(
      <LogIn
        closeLogInModal={mockCloseLoginModal}
        logInUser={mockLogInUser}
        setUserVenue={mockSetUserVenue}
        history={mockHistory}
        populateUserOffers={mockPopulateUserOffers}
        populateUserWatchlist={mockPopulateUserWatchlist}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
