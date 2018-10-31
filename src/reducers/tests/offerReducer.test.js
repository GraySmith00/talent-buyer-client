import { offerReducer } from '../offerReducer';
import {
  setOffersState,
  addNewOfferToState,
  editOfferAction
} from '../../actions/offerActions';
import {
  mockOffers,
  mockSingleOffer,
  mockTwoOffers,
  mockCombinedOffers,
  mockSingleOfferEdited,
  mockCombinedOffersEdited
} from '../../Utils/mockData';

describe('offerReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = offerReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should set the state with the offers listed', () => {
    expect(offerReducer(undefined, setOffersState(mockOffers))).toEqual(
      mockOffers
    );
  });

  it('should add a new offer to the state', () => {
    expect(
      offerReducer(mockTwoOffers, addNewOfferToState(mockSingleOffer))
    ).toEqual(mockCombinedOffers);
  });

  it('should edit an existing offer', () => {
    expect(
      offerReducer(mockCombinedOffers, editOfferAction(mockSingleOfferEdited))
    ).toEqual(mockCombinedOffersEdited);
  });
});
