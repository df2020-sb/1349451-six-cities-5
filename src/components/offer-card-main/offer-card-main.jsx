import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardMain = (props) => {
  return (
    <OfferCard className="cities__place-card place-card" pictureClassName="cities__image-wrapper place-card__image-wrapper"{...props} />
  );
};

export default OfferCardMain;
