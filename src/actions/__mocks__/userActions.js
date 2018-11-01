import { mockUser } from '../../Utils/mockData';

export const registerUser = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockUser);
});
