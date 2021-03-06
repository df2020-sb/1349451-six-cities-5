import React, {Fragment} from "react";
import {connect} from "react-redux";
import withForm from "../../hocs/with-form/with-form";
import {STARS_COUNT, StarTitle} from "../../const";
import {sendComment} from "../../store/api-actions";
import {PROPTYPES} from "../proptypes";


const ReviewForm = ({id, score, message, isValid, handleReviewSubmit, onSuccess, onChange, errorStatus}) => {

  const stars = new Array(STARS_COUNT).fill(null);

  const handleSubmit = (evt)=>{
    evt.preventDefault();
    handleReviewSubmit(id, message, score, onSuccess);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((_, i)=>{
          let value = (STARS_COUNT - i).toString();
          return (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={onChange}
                checked={score === Number(value)}/>
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={StarTitle[STARS_COUNT - i]}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onChange} value={message}></textarea>
      {errorStatus >= 400 && errorStatus < 500 ? <p style={{color: `red`}}>Incorrect request.</p> : ``}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
};

const mapStateToProps = ({APP_STATE}) => ({errorStatus: APP_STATE.errorStatus});

const mapDispatchToProps = (dispatch) => ({
  handleReviewSubmit: (id, message, score, onSuccess) => {
    dispatch(sendComment(id, message, score, onSuccess));
  }
});

ReviewForm.propTypes = PROPTYPES.reviewsForm;

export default connect(mapStateToProps, mapDispatchToProps)(withForm(ReviewForm));
