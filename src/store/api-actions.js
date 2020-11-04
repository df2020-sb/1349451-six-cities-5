import {loadOffers, changeAuth, redirectToRoute, getOffer, getNearbyOffers, getComments, toggleFavorite, loadFavoriteOffers} from "./action";
import {AppRoute, APIRoute} from "../const";

export const fetchAllOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS_ALL)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS_FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
);

export const fetchSelectedOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS_ALL}/${id}`)
    .then(({data}) => dispatch(getOffer(data)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS_ALL}/${id}/nearby`)
    .then(({data}) => dispatch(getNearbyOffers(data)))
);

export const fetchSelectedOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(getComments(data)))
);

export const toggleFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.OFFERS_FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(toggleFavorite(data)))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(changeAuth(true)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(changeAuth(true)))
    .then(() => dispatch(redirectToRoute(AppRoute.FAVORITES)))
);

