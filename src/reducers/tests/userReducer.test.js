import { userReducer } from '../userReducer';
import { mockUser } from '../../Utils/mockData';
import { setCurrentUserState } from '../../actions/userActions';

describe('userReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set state with the current user', () => {
    expect(userReducer(undefined, setCurrentUserState(mockUser))).toEqual(
      mockUser
    );
  });
});
