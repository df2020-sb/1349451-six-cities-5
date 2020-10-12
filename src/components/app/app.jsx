import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {PROPTYPES} from "../proptypes";

import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";

const App = (props) => {
  const {offersCount, offers} = props;
  const favoriteOffers = offers.filter((offer)=>offer.isBookmarked);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offersCount={offersCount} offers={offers}/>
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offers={favoriteOffers}/>
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen offers={offers} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = PROPTYPES.app;

export default App;
