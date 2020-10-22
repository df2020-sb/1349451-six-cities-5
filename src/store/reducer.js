import {extend} from "../utils";
import offers from "../mocks/offers";
import {CITIES} from "../const";
import {ActionType} from "./action";

const initialCity = CITIES[0];
const initialOffers = offers.filter((offer) => offer.city === initialCity.name);

const getOffersByCity = (city)=> offers.filter((offer) => offer.city === city);


const initialState = {
  selectedCity: initialCity,
  cityOffers: initialOffers,
  isLoggedIn: true
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: CITIES.find((city) => city.name === action.payload),
      });

    case ActionType.GET_CITY_OFFERS:
      const cityOffers = getOffersByCity(action.payload);
      return extend(state, {
        cityOffers
      });
  }

  return state;
};

export {reducer};
