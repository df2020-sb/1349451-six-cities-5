import {loadOffers, requireAuthorization, redirectToRoute, getNearbyOffers, getComments, toggleFavorite, loadFavoriteOffers, getEmail, getErrorMessage} from "./action";
import {AppRoute, APIRoute, AuthorizationStatus} from "../const";

export const fetchAllOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS_ALL)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS_FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
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
  .catch(()=> dispatch(redirectToRoute(AppRoute.LOGIN)))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(getEmail(data.email));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .then(() => dispatch(getEmail(email)))
);

export const sendComment = (id, comment, rating, onSuccess) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
   .then(api.get(`${APIRoute.COMMENTS}/${id}`))
   .then(({data}) => dispatch(getComments(data)))
   .then(()=>onSuccess(), (error)=>dispatch(getErrorMessage(error)))
);
