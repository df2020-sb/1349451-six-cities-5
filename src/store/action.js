export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`
};

export const ActionCreator = {

  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),


  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType
  }),

  toggleFavorite: (offerId) => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: offerId
  })
};
