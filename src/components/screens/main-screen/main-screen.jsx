import React, {Fragment} from "react";
import {connect} from "react-redux";
import {changeCity} from "../../../store/action";
import {AppRoute} from "../../../const";
import {PROPTYPES} from "../../proptypes";

import OffersList from "../../offers-list/offers-list";
import Header from "../../header/header";
import TopImage from "../../top-image/top-image";
import withMap from "../../../hocs/with-map/with-map";
import withActiveItem from "../../../hocs/with-active-item/with-active-item";
import CitiesList from "../../cities-list/cities-list";
import NoOffers from "../../no-offers/no-offers";
import Sort from "../../sort/sort";
import {getCityOffers} from "../../../store/selectors";


const MainScreen = (props) => {

  const {renderMap, selectedCity, cityOffers, handleCityClick, onCardHover, onCardMouseOut, activeOfferId} = props;

  return (
    <Fragment>
      <TopImage/>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <CitiesList selectedCity={selectedCity.name} onCityClick={handleCityClick}/>
          {!cityOffers.length ? <NoOffers city={selectedCity.name}/> :
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${cityOffers.length} ${cityOffers.length > 1 ? `places` : `place`} to stay in ${selectedCity.name}`}</b>
                  <Sort />
                  <OffersList
                    currentPage={AppRoute.MAIN}
                    offers={cityOffers}
                    onHover={onCardHover}
                    onMouseOut={onCardMouseOut}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    {renderMap(cityOffers, activeOfferId)}
                  </section>
                </div>
              </div>
            </div>
          }
        </main>
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({LOADED_DATA, APP_STATE}) => ({
  selectedCity: APP_STATE.selectedCity,
  cityOffers: getCityOffers({LOADED_DATA})(APP_STATE.selectedCity, APP_STATE.currentSortType)
});

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(evt) {
    dispatch(changeCity(evt.target.textContent));
  },
});

MainScreen.propTypes = PROPTYPES.mainScreen;

export default connect(mapStateToProps, mapDispatchToProps)(withMap(withActiveItem(MainScreen)));
