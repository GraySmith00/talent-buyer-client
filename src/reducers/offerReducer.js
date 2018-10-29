export const offerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OFFERS_STATE':
      return action.offers;
    case 'ADD_NEW_OFFER_TO_STATE':
      return [...state, action.offer];
    case 'EDIT_OFFER_ACTION': {
      const newOffers = state.map(offer => {
        if (offer.id === action.offer.id) {
          return action.offer;
        }
        return offer;
      });
      return newOffers;
    }
    default:
      return state;
  }
};
