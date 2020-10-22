import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./store/reducer";


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers}/>,
    </Provider>,
    document.querySelector(`#root`)
);
