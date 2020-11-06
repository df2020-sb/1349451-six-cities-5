export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`,
  GET_OFFER: `GET_OFFER`,
  GET_NEARBY_OFFERS: `GET_NEARBY_OFFERS`,
  GET_COMMENTS: `GET_COMMENTS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};


export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});


export const setSortType = (sortType) => ({
  type: ActionType.SET_SORT_TYPE,
  payload: sortType
});

export const toggleFavorite = (data) => ({
  type: ActionType.TOGGLE_FAVORITE,
  payload: data
});

export const getOffer = (offer) => ({
  type: ActionType.GET_OFFER,
  payload: offer
});

export const getNearbyOffers = (offers) => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: offers
});

export const getComments = (comments) => ({
  type: ActionType.GET_COMMENTS,
  payload: comments
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadFavoriteOffers = (offers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: offers,
});

export const changeAuth = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
