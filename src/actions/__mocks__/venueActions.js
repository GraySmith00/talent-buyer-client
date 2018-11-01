import { mockVenue } from '../../Utils/mockData';

export const setNewVenue = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockVenue);
});

export const setUserVenue = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockVenue);
});
