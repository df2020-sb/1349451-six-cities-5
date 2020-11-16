import React from "react";
import OfferCard from "../offer-card/offer-card";
import {PictureSize} from "../../const";


const OfferCardNear = (props) => {

  const restProps = Object.assign({}, props);
  delete restProps.onHover;
  delete restProps.onMouseOut;

  return (
    <OfferCard
      className="near-places__card place-card"
      pictureClassName="near-places__image-wrapper place-card__image-wrapper"
      pictureWidth={PictureSize.MAIN.width}
      pictureHeight={PictureSize.MAIN.height}
      {...restProps} />
  );
};

export default OfferCardNear;
