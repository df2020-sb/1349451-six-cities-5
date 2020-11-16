import React from "react";
import OffersList from "../offers-list/offers-list";
import OfferCardNear from "../offer-card-near/offer-card-near";
import {PROPTYPES} from "../proptypes";

const NearPlaces = ({offers})=>{

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <OffersList className="near-places__list places__list" offers={offers} Component={OfferCardNear}/>
      </section>
    </div>
  );
};

NearPlaces.propTypes = PROPTYPES.offersList;

export default React.memo(NearPlaces);
