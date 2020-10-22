import {SortType} from "./const";


export const sortOffers = (offers, sortType) => {

  switch (sortType) {

    case SortType.POPULAR:
      return offers;

    case SortType.PRICE_DOWN:
      return [...offers].sort((a, b)=>b.price - a.price);

    case SortType.PRICE_UP:
      return [...offers].sort((a, b)=>a.price - b.price);

    case SortType.RATING:
      return [...offers].sort((a, b)=>b.rating - a.rating);

    default: return null;
  }
};
