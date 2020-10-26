import {extend} from "../utils";
import offers from "../mocks/offers";
import {CITIES, SortType} from "../const";
import {ActionType} from "./action";

const initialCity = CITIES[0];

const initialState = {
  selectedCity: initialCity,
  offers,
  selectedOffer: null,
  currentSortType: SortType.POPULAR,
  isLoggedIn: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: CITIES.find((city) => city.name === action.payload),
      });

    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload
      });

    case ActionType.TOGGLE_FAVORITE:
      const index = state.offers.findIndex((offer)=>offer.id === action.payload);
      const toggledOffer = state.offers[index];
      toggledOffer.isFavorite = !toggledOffer.isFavorite;

      return extend(state, {
        offers: [...state.offers.slice(0, index), toggledOffer, ...state.offers.slice(index + 1)]
      });

    case ActionType.CHOOSE_OFFER:
      return extend(state, {
        selectedOffer: state.offers.find((offer)=>offer.id === action.payload)
      });
  }
  return state;
};

export {reducer};
