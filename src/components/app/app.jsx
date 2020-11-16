import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../../browser-history";
import {PROPTYPES} from "../proptypes";
import PrivateRoute from "../private-route/private-route";

import MainScreen from "../screens/main-screen/main-screen";
import LoginScreen from "../screens/login-screen/login-screen";
import FavoritesScreen from "../screens/favorites-screen/favorites-screen";
import PropertyScreen from "../screens/property-screen/property-screen";

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact
          path="/login"
          render={() => (
            <LoginScreen/>
          )}
        />
        <PrivateRoute
          exact
          path={`/favorites`}
          render={() => {
            return (
              <FavoritesScreen/>
            );
          }}
        />

        <Route exact path="/offer/:id">
          <PropertyScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = PROPTYPES.app;

export default App;
