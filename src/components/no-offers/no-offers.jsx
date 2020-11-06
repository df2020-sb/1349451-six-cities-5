import React from "react";
import PropTypes from "prop-types";

const NoOffers = ({city})=>{

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
          </div>
        </section>
        <div className="cities__right-section">
          <img src="img/no-places.png" width="100%" height="100%" alt="No places"/>
        </div>
      </div>
    </div>
  );
};

NoOffers.propTypes = PropTypes.string.isRequired;

export default NoOffers;
