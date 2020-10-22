import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {PROPTYPES} from "../proptypes";

import MainScreen from "../screens/main-screen/main-screen";
import LoginScreen from "../screens/login-screen/login-screen";
import FavoritesScreen from "../screens/favorites-screen/favorites-screen";
import PropertyScreen from "../screens/property-screen/property-screen";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = PROPTYPES.app;

export default App;
