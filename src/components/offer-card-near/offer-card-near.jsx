import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardNear = (props) => {
  return (
    <OfferCard className="near-places__card place-card" {...props} />
  );
};

export default OfferCardNear;
