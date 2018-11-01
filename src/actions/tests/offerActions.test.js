import {
  setOffersState,
  populateUserOffers,
  editOfferAction,
  editExistingOffer,
  addNewOfferToState,
  addNewOffer
} from '../offerActions';
import {
  mockOffers,
  mockOffer,
  mockSingleOfferEdited,
  mockSingleOffer
} from '../../Utils/mockData';
import {
  getAllUserOffers,
  offerPutRequest,
  offerPostRequest
} from '../../Utils/backendApiCalls';

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

  describe('addNewOfferToState', () => {
    it('should return an action of ADD_NEW_OFFER_TO_STATE and an offer object', () => {
      const expectation = {
        type: 'ADD_NEW_OFFER_TO_STATE',
        offer: mockOffer
      };

      const result = addNewOfferToState(mockOffer);
      expect(result).toEqual(expectation);
    });
  });

  describe('addNewOffer', () => {
    let mockDispatch;
    let thunk;

    beforeEach(() => {
      thunk = addNewOffer();
      mockDispatch = jest.fn();
    });

    it('should call offerPostRequest', async () => {
      await thunk(mockDispatch);
      expect(offerPostRequest).toHaveBeenCalled();
    });

    it('should dispatch addNewOfferToState if response was ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(
        addNewOfferToState(mockSingleOffer)
      );
    });
  });

  describe('editOfferAction', () => {
    it(
      'should return an object with the EDIT_OFFER_ACTION' + ' and the offer',
      () => {
        const expectation = {
          type: 'EDIT_OFFER_ACTION',
          offer: mockOffer
        };

        const result = editOfferAction(mockOffer);
        expect(result).toEqual(expectation);
      }
    );
  });

  describe('editExistingOffer', () => {
    let mockDispatch;
    let thunk;

    beforeEach(() => {
      thunk = editExistingOffer();
      mockDispatch = jest.fn();
    });

    it('should call offerPutRequest', async () => {
      await thunk(mockDispatch);
      expect(offerPutRequest).toHaveBeenCalled();
    });

    it('should dispatch editOfferAction if response was ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(
        editOfferAction(mockSingleOfferEdited)
      );
    });
  });
});
