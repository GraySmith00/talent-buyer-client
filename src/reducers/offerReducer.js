export const offerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OFFERS_STATE':
      return action.offers;
    case 'ADD_NEW_OFFER_TO_STATE': {
      const newOffer = action.offer;
      return [...state, action.offer];
    }
    default:
      return state;
  }
};
