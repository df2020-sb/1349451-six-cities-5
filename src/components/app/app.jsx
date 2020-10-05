import React from "react";
import MainScreen from "../main-screen/main-screen";
import PropTypes from "prop-types";

const App = (props) => {
  const {offersCount} = props;

  App.propTypes = {
    offersCount: PropTypes.number.isRequired,
  };

  return (
    <MainScreen offersCount={offersCount} />
  );
};

export default App;
