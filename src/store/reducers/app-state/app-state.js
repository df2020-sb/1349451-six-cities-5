import {extend} from "../../../utils";
import {CITIES, SortType} from "../../../const";
import {ActionType} from "../../action";

const initialCity = CITIES[0];

const initialState = {
  selectedCity: initialCity,
  currentSortType: SortType.POPULAR,
  errorStatus: null
};

const appState = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: CITIES.find((city) => city === action.payload),
      });

    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload
      });

    case ActionType.GET_ERROR:
      return extend(state, {
        errorStatus: action.payload.response.status
      });
  }
  return state;
};

export {appState};
