import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardFavorites = (props) => {
  return (
    <OfferCard className="favorites__card place-card" pictureClassName="favorites__image-wrapper place-card__image-wrapper" {...props} />
  );
};

export default OfferCardFavorites;
