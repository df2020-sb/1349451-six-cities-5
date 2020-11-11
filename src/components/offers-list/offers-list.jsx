import React from "react";
import {PROPTYPES} from "../proptypes";
import {AppRoute} from "../../const";

import OfferCardMain from "../offer-card-main/offer-card-main";
import OfferCardFavorites from "../offer-card-favorites/offer-card-favorites";
import OfferCardNear from "../offer-card-near/offer-card-near";


const OffersList = ({currentPage, offers, onHover, onMouseOut}) => {

  const renderOffers = (offersList, Component)=>{

    return (
      offersList.map((offer, i)=>(
        <Component
          key={`${i}-${offer.title}`}
          offer={offer}
          onHover={()=>onHover(offer.id)}
          onMouseOut={onMouseOut}/>
      ))
    );
  };

  const getOffersListByPage = (route, offersList) => {

    switch (route) {

      case AppRoute.FAVORITES:
        return (
          <div className="favorites__places">
            {renderOffers(offersList, OfferCardFavorites)}
          </div>
        );

      case AppRoute.OFFER:
        return (
          <div className="near-places__list places__list">
            {renderOffers(offersList, OfferCardNear)}
          </div>
        );

      case AppRoute.MAIN:
        return (
          <div className="cities__places-list places__list tabs__content">
            {renderOffers(offersList, OfferCardMain)}
          </div>
        );

      default: return null;
    }
  };

  return getOffersListByPage(currentPage, offers);
};

OffersList.propTypes = PROPTYPES.offersList;

export default React.memo(OffersList);
