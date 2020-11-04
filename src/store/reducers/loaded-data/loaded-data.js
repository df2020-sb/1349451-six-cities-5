import {extend, adaptOfferToClient, adaptCommentToClient} from "../../../utils";
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
      const index = state.offers.findIndex((offer)=>offer.id === action.payload);
      const toggledOffer = state.offers[index];
      toggledOffer.isFavorite = !toggledOffer.isFavorite;

      return extend(state, {
        offers: [...state.offers.slice(0, index), toggledOffer, ...state.offers.slice(index + 1)]
      });
  }
  return state;
};

export {loadedData};
