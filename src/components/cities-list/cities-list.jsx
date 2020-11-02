import React, {Fragment} from "react";
import {CITIES} from "../../const";
import {PROPTYPES} from "../proptypes";

const availableCities = CITIES.map((city)=>city.name);

const CitiesList = ({selectedCity, onCityClick})=>{


  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {availableCities.map((city)=>(
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

