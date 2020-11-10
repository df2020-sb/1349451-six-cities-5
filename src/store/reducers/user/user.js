import {ActionType} from "../../action";

const initialState = {
  isLoggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isLoggedIn: action.payload,
      });
  }

  return state;
};

export {user};
