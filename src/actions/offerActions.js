import { getAllUserOffers, offerPostRequest, offerPutRequest } from '../Utils/backendApiCalls';

// set user offers action
export const setOffersState = offers => ({
  type: 'SET_OFFERS_STATE',
  offers
});

// populate user offers thunk
export const populateUserOffers = userId => async dispatch => {
  const userOffers = await getAllUserOffers(userId);
  if (!userOffers.length) {
    return [];
  }
  dispatch(setOffersState(userOffers));
  return userOffers;
};

// add new offer action
export const addNewOfferToState = offer => ({
  type: 'ADD_NEW_OFFER_TO_STATE',
  offer
});

// add new offer thunk
export const addNewOffer = offer => async dispatch => {
  const savedOffer = await offerPostRequest(offer);
  if (!savedOffer) {
    throw new Error({ message: 'Something went wrong' });
  }
  dispatch(addNewOfferToState(savedOffer));
  return savedOffer;
};

//edit offer action
export const editOfferAction = offer => ({
  type: 'EDIT_OFFER_ACTION',
  offer
});

//edit existing offer thunk
export const editExistingOffer = offer => async dispatch => {
  const editedOffer = await offerPutRequest(offer);
  if (!editedOffer) {
    throw new Error({ message: 'Something went wrong' });
  }
  dispatch(editOfferAction(editedOffer));
  return offer;
};
