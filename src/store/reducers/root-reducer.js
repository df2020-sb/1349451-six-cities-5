import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";
import {loadedData} from "./loaded-data/loaded-data";
import {user} from "./user/user";


export const NameSpace = {
  LOADED_DATA: `LOADED_DATA`,
  APP_STATE: `APP_STATE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.LOADED_DATA]: loadedData,
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user,
});
