import React from "react";
import {PROPTYPES} from "../proptypes";


const OffersList = ({className, offers, onHover, onMouseOut, Component}) => {

  return (
    <div className={className}>
      {offers.map((offer, i)=>(
        <Component
          key={`${i}-${offer.title}`}
          offer={Object.assign({}, offer)}
          onHover={()=>onHover(offer.id)}
          onMouseOut={onMouseOut}/>
      ))
      }
    </div>
  );
};

OffersList.propTypes = PROPTYPES.offersList;

export default React.memo(OffersList);
