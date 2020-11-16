import React from "react";
import OfferCard from "../offer-card/offer-card";
import {PictureSize} from "../../const";

const OfferCardFavorites = (props) => {

  const restProps = Object.assign({}, props);
  delete restProps.onHover;
  delete restProps.onMouseOut;

  return (
    <OfferCard
      className="favorites__card place-card"
      pictureClassName="favorites__image-wrapper place-card__image-wrapper"
      pictureWidth={PictureSize.FAVORITES.width}
      pictureHeight={PictureSize.FAVORITES.height}
      {...restProps} />
  );
};

export default OfferCardFavorites;
