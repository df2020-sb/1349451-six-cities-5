import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardNear = (props) => {
  return (
    <OfferCard className="near-places__card place-card" pictureClassName="near-places__image-wrapper place-card__image-wrapper" {...props} />
  );
};

export default OfferCardNear;
