import {extend} from "../../../utils";
import {CITIES, SortType} from "../../../const";
import {ActionType} from "../../action";

const initialCity = CITIES[0];

const initialState = {
  selectedCity: initialCity,
  currentSortType: SortType.POPULAR,
};

const appState = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: CITIES.find((city) => city.name === action.payload),
      });

    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload
      });

  }
  return state;
};

export {appState};
