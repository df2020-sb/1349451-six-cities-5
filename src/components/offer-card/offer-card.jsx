import React from "react";
import {Link} from 'react-router-dom';
import {PROPTYPES} from "../proptypes";
import {connect} from "react-redux";
import {fetchSelectedOffer, fetchNearbyOffers, fetchSelectedOfferComments, toggleFavoriteStatus} from "../../store/api-actions";
import {useHistory} from "react-router-dom";


const OfferCard = (props) => {

  const {
    className = ``,
    pictureClassName = ``,
    offer,
    onHover,
    onMouseOut,
    handleFavoriteToggle,
    handleOfferClick,
    isLoggedIn
  } = props;

  const restProps = Object.assign({}, props);
  delete restProps.pictureClassName;

  const {id, images, title, isPremium, isFavorite, rating, type, price} = offer;
  const history = useHistory();

  const handleFavoriteClick = (offerId, status)=>{
    if (!isLoggedIn) {
      history.push(`/login`);
    }
    handleFavoriteToggle(offerId, status);
  };

  return (
    <article className={className} onMouseEnter={onHover} onMouseLeave={onMouseOut}>

      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={pictureClassName} onClick={()=>handleOfferClick(id)}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"/>
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
            onClick={()=>handleFavoriteClick(id, Number(isFavorite))}
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
        <h2 className="place-card__name" onClick={()=>handleOfferClick(id)}>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const mapStateToProps = ({USER})=>({
  isLoggedIn: USER.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({

  handleFavoriteToggle(id, status) {
    dispatch(toggleFavoriteStatus(id, status));
  },

  handleOfferClick(id) {
    dispatch(fetchSelectedOffer(id));
    dispatch(fetchSelectedOfferComments(id));
    dispatch(fetchNearbyOffers(id));

  },
});

OfferCard.propTypes = PROPTYPES.offerCard;

export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
