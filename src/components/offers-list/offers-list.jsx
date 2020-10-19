import React, {PureComponent} from "react";
import OfferCardMain from "../offer-card-main/offer-card-main";
import OfferCardFavorites from "../offer-card-favorites/offer-card-favorites";
import OfferCardNear from "../offer-card-near/offer-card-near";
import {PROPTYPES} from "../proptypes";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(offer) {
    this.setState({activeOffer: offer});
  }

  getOffersListByPage(location, offers) {

    switch (true) {

      case location.indexOf(`/favorites`) > -1:
        return (
          <div className="favorites__places">
            {offers.map((offer, i)=>(
              <OfferCardFavorites key={`${i}-${offer.title}`} offer={offer}></OfferCardFavorites>
            ))}
          </div>
        );

      case location.indexOf(`/offer/`) > -1:
        return (
          <div className="near-places__list places__list">
            {offers.map((offer, i)=>(
              <OfferCardNear key={`${i}-${offer.title}`} offer={offer}></OfferCardNear>
            ))}
          </div>
        );

      default:
        return (
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer, i)=>(
              <OfferCardMain
                key={`${i}-${offer.title}`}
                offer={offer}
                onHover={()=>this.handleCardHover(offer)}>
              </OfferCardMain>
            ))}
          </div>
        );
    }

  }

  render() {
    const {location, offers} = this.props;
    return this.getOffersListByPage(location, offers);
  }
}

OffersList.propTypes = PROPTYPES.offersList;

export default OffersList;
