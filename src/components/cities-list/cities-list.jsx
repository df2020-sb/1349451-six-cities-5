import React, {Fragment} from "react";
import {PROPTYPES} from "../proptypes";

const CitiesList = ({cityNames, selectedCity, onCityClick})=>{

  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cityNames.map((city)=>(
              <li className="locations__item" key={city}>
                <a className={`locations__item-link tabs__item ${city === selectedCity ? `tabs__item--active` : ``}`} href="#">
                  <span onClick={onCityClick}>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Fragment>

  );
};

CitiesList.propTypes = PROPTYPES.citiesList;

export default React.memo(CitiesList);
