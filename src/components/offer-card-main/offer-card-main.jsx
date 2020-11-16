import React from "react";
import OfferCard from "../offer-card/offer-card";
import {PictureSize} from "../../const";


const OfferCardMain = (props) => {
  return (
    <OfferCard
      className="cities__place-card place-card"
      pictureClassName="cities__image-wrapper place-card__image-wrapper"
      pictureWidth={PictureSize.MAIN.width}
      pictureHeight={PictureSize.MAIN.height}
      {...props} />
  );
};

export default OfferCardMain;
