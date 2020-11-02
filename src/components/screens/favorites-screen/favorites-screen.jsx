import React, {Fragment} from "react";
import {connect} from "react-redux";
import {PROPTYPES} from "../../proptypes";
import {Page} from "../../../const";

import TopImage from "../../top-image/top-image";
import Header from "../../header/header";
import OffersList from "../../offers-list/offers-list";
import Footer from "../../footer/footer";


const FavoritesScreen = ({favoriteOffers, favoriteCities}) => {

  return (
    <Fragment>
      <TopImage/>
      <div className="page">
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCities.map((city)=>(
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <OffersList
                      currentPage={Page.FAVORITES}
                      offers={favoriteOffers.filter((offer)=>offer.city === city)}>
                    </OffersList>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <Footer/>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const favoriteOffers = state.offers.filter((offer) => offer.isFavorite);
  const favoriteCities = Array.from(new Set(favoriteOffers.map((offer)=>offer.city)));

  return ({
    favoriteOffers,
    favoriteCities
  });
};

FavoritesScreen.propTypes = PROPTYPES.offer;

export default connect(mapStateToProps)(FavoritesScreen);
