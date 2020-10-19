import React from "react";
import {Link} from 'react-router-dom';
import {PROPTYPES} from "../proptypes";


const OfferCard = (props) => {
  const {className = ``, pictureClassName = ``, offer, onHover, onMouseOut} = props;
  const restProps = Object.assign({}, props);
  delete restProps.pictureClassName;

  const {id, pictures, title, isPremium, isBookmarked, rating, type, price} = offer;

  return (
    <article className={className} onMouseEnter={onHover} onMouseLeave={onMouseOut}>

      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={pictureClassName}>
        <Link to={`/offer/${id}`}>
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
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = PROPTYPES.offerCard;

export default OfferCard;

