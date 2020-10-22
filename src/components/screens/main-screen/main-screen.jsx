import React, {Fragment, useState} from "react";
import OffersList from "../../offers-list/offers-list";
import Header from "../../header/header";
import TopImage from "../../top-image/top-image";
import Main from "../../main/main";
import Page from "../../page/page";
import withMap from "../../../hocs/with-map/with-map";
import CitiesList from "../../cities-list/cities-list";
import NoOffers from "../../no-offers/no-offers";
import Sort from "../../sort/sort";
import {CITIES, SortType} from "../../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import {PROPTYPES} from "../../proptypes";

const MainScreen = (props) => {

  const {renderMap, selectedCity, cityOffers, handleCityClick} = props;
  const [activeOfferId, setActiveOfferId] = useState();
  const [currentSortType, setCurrentSortType] = useState(SortType.POPULAR);

  const handleCardHover = (activeOffer)=> {
    setActiveOfferId(activeOffer.id);
  };
  const handleCardMouseOut = ()=>{
    setActiveOfferId(``);
  };

  const handleSortTypeChange = (sortType)=>{
    setCurrentSortType(sortType);
  };

  return (
    <Fragment>
      <TopImage/>
      <Page className="page page--gray page--main">
        <Header />
        <Main className="page__main page__main--index">
          <CitiesList cities={CITIES.map((city)=>city.name)} selectedCity={selectedCity.name} onCityClick={handleCityClick}/>
          {!cityOffers.length ? <NoOffers city={selectedCity.name}/> :
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${cityOffers.length} ${cityOffers.length > 1 ? `places` : `place`} to stay in ${selectedCity.name}`}</b>
                  <Sort currentSortType={currentSortType} onSortTypeChange={handleSortTypeChange}/>
                  <OffersList
                    currentPage={window.location.href}
                    offers={cityOffers}
                    currentSortType={currentSortType}
                    onHover={handleCardHover}
                    onMouseOut={handleCardMouseOut}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    {renderMap(cityOffers, activeOfferId, selectedCity.coords)}
                  </section>
                </div>
              </div>
            </div>
          }
        </Main>
      </Page>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  cityOffers: state.cityOffers,
});

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(evt) {
    dispatch(ActionCreator.changeCity(evt.target.textContent));
    dispatch(ActionCreator.getOffers(evt.target.textContent));
  },
});

MainScreen.propTypes = PROPTYPES.mainScreen;

export default connect(mapStateToProps, mapDispatchToProps)(withMap(MainScreen));
