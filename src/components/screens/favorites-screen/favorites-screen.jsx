import React, {Fragment} from "react";
import {connect} from "react-redux";
import {PROPTYPES} from "../../proptypes";
import {AppRoute} from "../../../const";

import TopImage from "../../top-image/top-image";
import Header from "../../header/header";
import OffersList from "../../offers-list/offers-list";
import Footer from "../../footer/footer";
import NoFavorites from "../../no-favorites/no-favorites";
import {getFavoriteOffers, getFavoriteCities} from "../../../store/selectors";


const FavoritesScreen = ({favoriteOffers, favoriteCities}) => {

  return (
    <Fragment>
      <TopImage/>
      <div className="page">
        <Fragment>
          <Header/>
          {!favoriteOffers.length ? <NoFavorites/> :
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
                          currentPage={AppRoute.FAVORITES}
                          offers={favoriteOffers.filter((offer)=>offer.city.name === city)}>
                        </OffersList>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>
          }
        </Fragment>
        <Footer/>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({LOADED_DATA}) => {
  const favoriteOffers = getFavoriteOffers({LOADED_DATA});
  const favoriteCities = getFavoriteCities({LOADED_DATA});

  return ({
    favoriteOffers,
    favoriteCities
  });
};

FavoritesScreen.propTypes = PROPTYPES.offer;

export default connect(mapStateToProps)(FavoritesScreen);
