import React, {PureComponent} from "react";
import OfferCard from "../offer-card/offer-card";
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

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => (
          <OfferCard
            key={`${i}-${offer.title}`}
            offer={offer}
            onHover={()=>this.handleCardHover(offer)}>
          </OfferCard>))}
      </div>
    );
  }
}

OffersList.propTypes = PROPTYPES.offersList;

export default OffersList;
