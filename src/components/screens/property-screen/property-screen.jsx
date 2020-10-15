import React, {Fragment} from "react";
import {PROPTYPES} from "../../proptypes";

import Header from "../../header/header";
import TopImage from "../../top-image/top-image";
import Page from "../../page/page";
import Main from "../../main/main";
import OffersList from "../../offers-list/offers-list";
import Review from "../../review/review";
import ReviewForm from "../../review-form/review-form";

const PropertyScreen = ({offers}) => {
  const offer = offers[0];
  const {pictures, title, isPremium, isBookmarked, rating, type, price, bedroomsCount, maxGuests, amenities, owner, description, reviews} = offer;
  const location = window.location.href;

  return (
    <Fragment>
      <TopImage/>
      <Page className="page">
        <Header location={location}/>
        <Main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {pictures.map((picture, i)=>(
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

                  <button className={`property__bookmark-button button ${isBookmarked ? `property__bookmark-button--active` : ``}`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{isBookmarked ? `In bookmarks` : `To bookmarks`}</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${Math.round(rating) * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">{type}</li>
                  <li className="property__feature property__feature--bedrooms">{bedroomsCount} Bedrooms</li>
                  <li className="property__feature property__feature--adults">Max {maxGuests} adults</li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {amenities.map((item, i)=>(
                      <li key={`${i}-item`} className="property__inside-item">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">{owner.name}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">{description}</p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                  <ul className="reviews__list">
                    {reviews.map((review, i) => <Review key={`${i}-${review.name}`} review={review}/>)}
                  </ul>
                  <ReviewForm/>
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList location={location} offers={offers}></OffersList>
            </section>
          </div>
        </Main>
      </Page>
    </Fragment>
  );
};

PropertyScreen.propTypes = PROPTYPES.offer;

export default PropertyScreen;
