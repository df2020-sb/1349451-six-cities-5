import React from "react";
import {Link} from 'react-router-dom';
import {PROPTYPES} from "../proptypes";

const OfferCard = ({onHover, offer}) => {

  const {pictures, title, isPremium, isBookmarked, rating, type, price} = offer;

  let cardClasses = `cities__place-card place-card`;
  let imageWrapperClasses = `cities__image-wrapper place-card__image-wrapper`;

  if (window.location.href.indexOf(`/offer/`) > -1) {
    cardClasses = `near-places__card place-card`;
    imageWrapperClasses = `near-places__image-wrapper place-card__image-wrapper`;
  }

  return (


    <article className={cardClasses} onMouseEnter={onHover} >

      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className={imageWrapperClasses}>
        <Link to={`/offer/0`}>
          <img className="place-card__image" src={pictures[0]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isBookmarked ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isBookmarked ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/0`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
};

OfferCard.propTypes = PROPTYPES.offer;

export default OfferCard;

