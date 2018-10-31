import { setCurrentUserState } from '../userActions';
import { mockUser } from '../../Utils/mockData';

describe('userActions', () => {
  describe('setCurrentUserState', () => {
    it(
      'return an object with the SET_CURRENT_USER_STATE action' +
        ' the user and the isAuthenticated state',
      () => {
        const expectation = {
          type: 'SET_CURRENT_USER_STATE',
          user: mockUser,
          isAuthenticated: true
        };

        const result = setCurrentUserState(mockUser, true);
        expect(result).toEqual(expectation);
      }
    );
  });
});
