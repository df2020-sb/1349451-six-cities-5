import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {PROPTYPES} from "../proptypes";

import MainScreen from "../screens/main-screen/main-screen";
import LoginScreen from "../screens/login-screen/login-screen";
import FavoritesScreen from "../screens/favorites-screen/favorites-screen";
import PropertyScreen from "../screens/property-screen/property-screen";

const App = (props) => {
  const {offersCount, offers, isLoggedIn} = props;
  const favoriteOffers = offers.filter((offer)=>offer.isBookmarked);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offersCount={offersCount} offers={offers} isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offers={favoriteOffers}/>
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen offers={offers} isLoggedIn={isLoggedIn}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = PROPTYPES.app;

export default App;
