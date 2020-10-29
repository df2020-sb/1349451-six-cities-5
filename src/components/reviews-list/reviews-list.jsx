import React, {Fragment} from "react";
import Review from "../review/review";
import {PROPTYPES} from "../proptypes";

const ReviewsList = ({reviews})=>{

  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => <Review key={`${i}-${review.name}`} review={review}/>)}
      </ul>
    </Fragment>

  );
};

ReviewsList.propTypes = PROPTYPES.reviewsList;

export default React.memo(ReviewsList);
