import React from "react";
import {Link} from 'react-router-dom';
import {PROPTYPES} from "../proptypes";
import {connect} from "react-redux";
import {toggleFavoriteStatus} from "../../store/api-actions";
import {AppRoute} from "../../const";
import {getOffer} from "../../store/action";


const OfferCard = (props) => {

  const {
    className = ``,
    pictureClassName = ``,
    pictureWidth,
    pictureHeight,
    offer,
    onHover,
    onMouseOut,
    handleFavoriteToggle,
    handleCardClick,
  } = props;

  const {id, images, title, isPremium, isFavorite, rating, type, price} = offer;

  return (
    <article className={className} onMouseEnter={onHover} onMouseLeave={onMouseOut}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={pictureClassName} onClick={()=>handleCardClick(id)}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width={pictureWidth} height={pictureHeight} alt="Place image"/>
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`}
            type="button"
            onClick={()=>handleFavoriteToggle(id, Number(!isFavorite))}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={()=>handleCardClick(id)}>
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


const mapDispatchToProps = (dispatch) => ({
  handleCardClick: (id)=>dispatch(getOffer(id)),
  handleFavoriteToggle: (id, status)=>dispatch(toggleFavoriteStatus(id, status))
});

OfferCard.propTypes = PROPTYPES.offerCard;

export default connect(null, mapDispatchToProps)(OfferCard);
