import React from "react";
import {PROPTYPES} from "../proptypes";

const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`,
  `July`, `August`, `September`, `October`, `November`, `December`
];

const Review = ({review}) => {

  const {avatar, date, score, name, message} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(score) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{message}</p>
        <time className="reviews__time" dateTime={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}>{`${MONTHS[date.getMonth()]} ${date.getFullYear()}`}</time>
      </div>
    </li>
  );
};

Review.propTypes = PROPTYPES.review;

export default Review;
