import {extend, adaptOfferToClient, adaptCommentToClient, getIndex, updateFavoriteFlag} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  nearbyOffers: [],
  comments: [],
  selectedOffer: null
};

const loadedData = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload.map((item)=>adaptOfferToClient(item))
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
      return extend(state, {
        offers: updateFavoriteFlag(state.offers, getIndex(state.offers, action.payload)),
        nearbyOffers: updateFavoriteFlag(state.nearbyOffers, getIndex(state.nearbyOffers, action.payload)),
      });

    case ActionType.GET_OFFER:
      return extend(state, {
        selectedOffer: state.offers.find((offer)=> offer.id === action.payload)
      });
  }

  return state;
};
export {loadedData};
