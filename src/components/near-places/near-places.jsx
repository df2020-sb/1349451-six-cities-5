import React from "react";
import OffersList from "../offers-list/offers-list";
import {PROPTYPES} from "../proptypes";


const NearPlaces = ({location, offers})=>{

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <OffersList location={location} offers={offers}></OffersList>
      </section>
    </div>
  );
};


NearPlaces.propTypes = PROPTYPES.offersList;

export default NearPlaces;
