import React, {Fragment} from "react";
import {PROPTYPES} from "../../proptypes";
import {connect} from "react-redux";

import TopImage from "../../top-image/top-image";
import Page from "../../page/page";
import Header from "../../header/header";
import Main from "../../main/main";
import OffersList from "../../offers-list/offers-list";
import Footer from "../../footer/footer";


const FavoritesScreen = ({favoriteOffers}) => {

  return (
    <Fragment>
      <TopImage/>
      <Page className="page">
        <Header/>
        <Main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <OffersList currentPage={window.location.href} offers={favoriteOffers}></OffersList>
                </li>
              </ul>
            </section>
          </div>
        </Main>
        <Footer/>
      </Page>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.offers.filter((offer) => offer.isFavorite),
});

FavoritesScreen.propTypes = PROPTYPES.offer;

export default connect(mapStateToProps)(FavoritesScreen);
