import {sortOffers} from "../sort";
import {createSelector} from "reselect";


const getOffers = (state) => {
  return state.LOADED_DATA.offers;
};

export const getFavoriteOffers = (state) => {
  return state.LOADED_DATA.favoriteOffers;
};

export const getCityOffers = createSelector(
    getOffers,
    (offers) => (city, sortType) => sortOffers(offers.filter((offer) => offer.city.name === city.name), sortType)
);

export const getFavoriteCities = createSelector(
    getFavoriteOffers,
    (offers) => Array.from(new Set(offers.map((offer)=>offer.city.name)))
);


