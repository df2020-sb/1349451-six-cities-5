import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./api";
import {composeWithDevTools} from "redux-devtools-extension";
import {changeAuth} from "./store/action";
import {fetchAllOffers, checkAuth} from "./store/api-actions";


const api = createAPI(
    () => store.dispatch(changeAuth(false))
);


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchAllOffers());

// store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
