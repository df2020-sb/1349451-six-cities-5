import React, {Fragment, useState} from "react";
import OffersList from "../../offers-list/offers-list";
import Header from "../../header/header";
import TopImage from "../../top-image/top-image";
import Main from "../../main/main";
import Page from "../../page/page";
import withMap from "../../../hocs/with-map/with-map";
import CitiesList from "../../cities-list/cities-list";

import {PROPTYPES} from "../../proptypes";

const MainScreen = (props) => {

  const {offersCount, offers, isLoggedIn, renderMap} = props;
  const [activeOfferId, setActiveOfferId] = useState();

  const handleCardHover = (offer)=> {
    setActiveOfferId(offer.id);
  };

  const handleCardMouseOut = ()=>{
    setActiveOfferId(``);
  };

  return (
    <Fragment>
      <TopImage/>
      <Page className="page page--gray page--main">
        <Header isLoggedIn={isLoggedIn}/>
        <Main className="page__main page__main--index">
          <CitiesList/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--closed">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>

                  {/* <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select> */}

                </form>
                <OffersList
                  currentPage={window.location.href}
                  offers={offers}
                  onHover={handleCardHover}
                  onMouseOut={handleCardMouseOut}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {renderMap(offers, activeOfferId)}
                </section>
              </div>
            </div>
          </div>
        </Main>
      </Page>
    </Fragment>
  );
};

MainScreen.propTypes = PROPTYPES.mainScreen;

export default withMap(MainScreen);
