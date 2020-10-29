import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardFavorites = (props) => {

  const restProps = Object.assign({}, props);
  delete restProps.onHover;
  delete restProps.onMouseOut;

  return (
    <OfferCard className="favorites__card place-card" pictureClassName="favorites__image-wrapper place-card__image-wrapper" {...restProps} />
  );
};

export default OfferCardFavorites;
