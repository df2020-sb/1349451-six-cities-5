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
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  GET_EMAIL: `GET_EMAIL`,
  GET_ERROR: `GET_ERROR`
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

export const getOffer = (id) => ({
  type: ActionType.GET_OFFER,
  payload: id
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

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const getEmail = (email) => ({
  type: ActionType.GET_EMAIL,
  payload: email,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const getErrorMessage = (message) => ({
  type: ActionType.GET_ERROR,
  payload: message,
});
