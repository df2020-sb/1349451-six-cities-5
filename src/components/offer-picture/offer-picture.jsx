import React from "react";
import {Link} from 'react-router-dom';
import {PROPTYPES} from "../proptypes";

const OfferPicture = ({offerId, picture})=>{

  return (
    <div >
      <Link to={`/offer/${offerId}`}>
        <img className="place-card__image" src={picture} width="260" height="200" alt="Place image"/>
      </Link>
    </div>
  );
};

OfferPicture.propTypes = PROPTYPES.offerCard;

export default OfferPicture;
