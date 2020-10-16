import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";

const Settings = {
  OFFERS_COUNT: 4
};

ReactDOM.render(
    <App offersCount={Settings.OFFERS_COUNT} offers={offers} isLoggedIn={true}/>,
    document.querySelector(`#root`)
);
