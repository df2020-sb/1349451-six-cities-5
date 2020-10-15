import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardFavorites = (props) => {
  return (
    <OfferCard className="favorites__card place-card" {...props} />
  );
};

export default OfferCardFavorites;
