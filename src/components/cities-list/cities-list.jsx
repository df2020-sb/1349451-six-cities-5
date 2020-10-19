import React, {Fragment, useState} from "react";

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const CitiesList = ()=>{

  const [activeCity, setActiveCity] = useState(`Amsterdam`);

  const handleCityClick = (evt)=>{
    setActiveCity(evt.target.textContent);
  };

  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city)=>(
              <li className="locations__item" key={city}>
                <a className={`locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`} href="#">
                  <span onClick={handleCityClick}>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Fragment>

  );
};

export default CitiesList;
