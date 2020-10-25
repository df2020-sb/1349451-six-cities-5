import React from "react";
import OfferCardMain from "../offer-card-main/offer-card-main";
import OfferCardFavorites from "../offer-card-favorites/offer-card-favorites";
import OfferCardNear from "../offer-card-near/offer-card-near";
import {sortOffers} from "../../sort";
import {connect} from "react-redux";
import {PROPTYPES} from "../proptypes";

const OffersList = ({currentPage, offers, currentSortType, onHover, onMouseOut}) => {

  const renderOffers = (offersList, Component)=>{
    return (
      offersList.map((offer, i)=>(
        <Component
          key={`${i}-${offer.title}`}
          offer={offer}
          onHover={()=>onHover(offer)}
          onMouseOut={onMouseOut}/>
      ))
    );
  };

  const getOffersListByPage = (page, offersList) => {

    switch (true) {

      case page.indexOf(`/favorites`) > -1:
        return (
          <div className="favorites__places">
            {renderOffers(offersList, OfferCardFavorites)}
          </div>
        );

      case page.indexOf(`/offer/`) > -1:
        return (
          <div className="near-places__list places__list">
            {renderOffers(offersList, OfferCardNear)}
          </div>
        );

      case page.indexOf(`/`) > -1:
        return (
          <div className="cities__places-list places__list tabs__content">
            {renderOffers(sortOffers(offersList, currentSortType), OfferCardMain)}
          </div>
        );

      default: return null;
    }
  };

  return getOffersListByPage(currentPage, offers);
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType
});

OffersList.propTypes = PROPTYPES.offersList;

export default connect(mapStateToProps)(OffersList);
