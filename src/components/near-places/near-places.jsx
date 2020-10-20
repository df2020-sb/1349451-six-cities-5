import React from "react";
import OffersList from "../offers-list/offers-list";
import {PROPTYPES} from "../proptypes";


const NearPlaces = ({currentPage, offers, onHover, onMouseOut})=>{

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <OffersList currentPage={currentPage} offers={offers} onHover={onHover} onMouseOut={onMouseOut}></OffersList>
      </section>
    </div>
  );
};


NearPlaces.propTypes = PROPTYPES.offersList;

export default NearPlaces;
