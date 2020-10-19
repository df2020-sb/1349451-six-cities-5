import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardMain = (props) => {
  return (
    <OfferCard className="cities__place-card place-card" {...props} />
  );
};

export default OfferCardMain;
