import React, {Fragment} from "react";
import {connect} from "react-redux";
import {toggleFavorite} from "../../../store/action";
import {AppRoute} from "../../../const";
import {PROPTYPES} from "../../proptypes";

import Header from "../../header/header";
import TopImage from "../../top-image/top-image";
import NearPlaces from "../../near-places/near-places";
import ReviewsList from "../../reviews-list/reviews-list";
import ReviewForm from "../../review-form/review-form";
import withMap from "../../../hocs/with-map/with-map";
import withActiveItem from "../../../hocs/with-active-item/with-active-item";


const PropertyScreen = (props)=> {

  const {selectedOffer, nearbyOffers, comments, handleFavoriteClick, renderMap, onCardHover, onCardMouseOut, activeOfferId} = props;

  const {images, title, isPremium, isFavorite, rating, type, price, bedrooms, maxGuests, goods, host, description} = selectedOffer || {};

  return (
    <Fragment>
      <TopImage/>
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          {selectedOffer &&
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {images.map((picture, i)=>(
                    <div key={`${i}-picture`} className="property__image-wrapper">
                      <img className="property__image" src={picture} alt="Photo studio"/>
                    </div>
                  ))}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">

                  {isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  }

                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {title}
                    </h1>

                    <button
                      className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`}
                      type="button"
                      onClick={()=>handleFavoriteClick(selectedOffer.id)}>
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: `${rating * 20}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">{type}</li>
                    <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                    <li className="property__feature property__feature--adults">Max {maxGuests} adults</li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {goods.map((item, i)=>(
                        <li key={`${i}-item`} className="property__inside-item">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                        <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
                      </div>
                      <span className="property__user-name">{host.name}</span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">{description}</p>
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    {comments.length ? <ReviewsList reviews={comments}/> : ``}
                    <ReviewForm/>
                  </section>
                </div>
              </div>
              {!nearbyOffers.length ? `` :
                <Fragment>
                  <section className="property__map map">
                    {renderMap(nearbyOffers, activeOfferId)}
                  </section>
                  <NearPlaces
                    currentPage={AppRoute.OFFER}
                    offers={nearbyOffers}
                    onHover={onCardHover}
                    onMouseOut={onCardMouseOut}/>
                </Fragment>
              }
            </section>
          }
        </main>
      </div>
    </Fragment>
  );
};


const mapStateToProps = ({LOADED_DATA}) => {
  return ({
    selectedOffer: LOADED_DATA.selectedOffer,
    nearbyOffers: LOADED_DATA.nearbyOffers,
    comments: LOADED_DATA.comments,
  });
};


const mapDispatchToProps = (dispatch) => ({
  handleFavoriteClick(id) {
    dispatch(toggleFavorite(id));
  },
});

PropertyScreen.propTypes = PROPTYPES.offer;

export default connect(mapStateToProps, mapDispatchToProps)(withMap(withActiveItem(PropertyScreen)));
