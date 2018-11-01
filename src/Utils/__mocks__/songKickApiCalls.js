import { mockVenue } from '../mockData';

export const getMatchingVenue = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockVenue);
});
