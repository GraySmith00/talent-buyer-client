import { setOffersState, populateUserOffers } from '../offerActions';
import { mockOffers } from '../../Utils/mockData';
import { getAllUserOffers } from '../../Utils/backendApiCalls';

jest.mock('../../Utils/backendApiCalls');

describe('offerAction', () => {
  describe('setOfferState', () => {
    it(
      'should return an object with the SET_OFFERS_STATE action ' +
        'and the offers object',
      () => {
        const expectation = {
          type: 'SET_OFFERS_STATE',
          offers: mockOffers
        };

        const result = setOffersState(mockOffers);

        expect(result).toEqual(expectation);
      }
    );
  });
  describe('populateUserOffers', () => {
    let mockDispatch;
    let thunk;

    beforeEach(() => {
      thunk = populateUserOffers();
      mockDispatch = jest.fn();
    });

    it('should call getAllUserOffers', async () => {
      await thunk(mockDispatch);
      expect(getAllUserOffers).toHaveBeenCalled();
    });

    it('should dispatch setOfferState if response was ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(setOffersState(mockOffers));
    });
  });
});
