import {extend, adaptOfferToClient, adaptCommentToClient, getIndex, addOffer, removeOffer, updateFavoriteFlag} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  selectedOffer: null,
  nearbyOffers: [],
  comments: [],
  favoriteOffers: []
};

const loadedData = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload.map((item)=>adaptOfferToClient(item))
      });

    case ActionType.GET_OFFER:
      return extend(state, {
        selectedOffer: adaptOfferToClient(action.payload)
      });

    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload.map((item)=>adaptOfferToClient(item))
      });


    case ActionType.GET_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload.map((item)=>adaptOfferToClient(item))
      });

    case ActionType.GET_COMMENTS:
      return extend(state, {
        comments: action.payload.map((item)=>adaptCommentToClient(item))
      });

    case ActionType.TOGGLE_FAVORITE:

      const updateFavoriteOffers = (offers, update) => {
        const favoriteIndex = getIndex(offers, update);
        return favoriteIndex === -1 ? addOffer(offers, update) : removeOffer(offers, favoriteIndex);
      };

      return extend(state, {
        offers: updateFavoriteFlag(state.offers, getIndex(state.offers, action.payload)),
        nearbyOffers: updateFavoriteFlag(state.nearbyOffers, getIndex(state.nearbyOffers, action.payload)),
        favoriteOffers: updateFavoriteOffers(state.favoriteOffers, action.payload)
      });
  }

  return state;
};
export {loadedData};
