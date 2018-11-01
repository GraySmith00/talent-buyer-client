import mockAxios from 'axios';
import { signUpPostRequest } from '../backendApiCalls';

describe('BackendApiCalls', () => {
  describe('signUpPostRequest', () => {
    it.skip('should call fetch with the correct params', () => {
      mockAxios.post = jest.fn();
      signUpPostRequest();
      expect(mockAxios.post).toHaveBeenCalled();
    });
  });
});
