import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";

const App = (props) => {
  const {offersCount} = props;

  App.propTypes = {
    offersCount: PropTypes.number.isRequired,
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offersCount={offersCount} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id?">
          <PropertyScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
